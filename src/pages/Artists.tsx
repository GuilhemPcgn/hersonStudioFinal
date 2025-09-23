import { useState } from 'react';
import headerArtists from '@/assets/headerArtists.jpeg';

const Artists = () => {
  const artists = [
    { name: "Austin.", genre: "Rap/Hip-Hop", image: "./artists/austin..png", description: "Un rappeur au croisement du rap et du rock." },
    { name: "SevK", genre: "Rap/Hip-Hop", image: "./artists/SevK.png", description: "Un rappeur authentique qui mêle textes bruts, sonorités hispaniques et une touche romantique." },
    { name: "Kiara", genre: "RnB/Soul", image: "./artists/KIARA.jpg", description: "Une voix moderne inspirée par SZA, dans un univers RnB vibrant et intime." },
    { name: "Pénélope", genre: "Pop Electronique", image: "./artists/penelope.jpeg", description: "Une artiste pop électronique immersive, teintée d'influences jeux vidéo." },
    { name: "Solen", genre: "Pop/Neo-Soul", image: "./artists/SOlen.png", description: "Une artiste indie-pop urbaine aux allures mélodiques, inspirée par la néo soul." },
    { name: "Tifen", genre: "Pop Urbaine", image: "./artists/TIF.jpg", description: "Une artiste pop urbaine poétique, portée par des textes puissants et une voix singulière." },
    { name: "Tigre", genre: "Pop Electronique", image: "./artists/tigre.jpg", description: "Une artiste pop électronique bullaire : intime, directe, habitée." },
    { name: "Audrey", genre: "Pop Soul", image: "./artists/Audrey.jpg", description: "Entre Beatles et Amy Winehouse, une pop soul organique aux couleurs rétro et psychadélique." },
    { name: "Antoine Crop", genre: "Néo Classique", image: "./artists/antoine.jpeg", description: "Un univers néo-classique cinématographique, entre piano et cordes, influencé par Max Richter." },
    { name: "Gerson", genre: "Pop/RnB", image: "./artists/Gerson.png", description: "Un son qui fusionne l’énergie de la pop et la sensualité du RnB" },
  ];

  // État pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const artistsPerPage = 6;
  
  // Calculer les artistes à afficher pour la page actuelle
  const totalPages = Math.ceil(artists.length / artistsPerPage);
  const startIndex = (currentPage - 1) * artistsPerPage;
  const endIndex = startIndex + artistsPerPage;
  const currentArtists = artists.slice(startIndex, endIndex);

  // Fonctions de navigation avec animation
  const goToNextPage = () => {
    if (currentPage < totalPages && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const goToPage = (page: number) => {
    if (page !== currentPage && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(page);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <img
          src={headerArtists}
          alt="Background Artists"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
          style={{ objectPosition: 'center 45%' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-md border border-white/30 shadow-2xl p-12 rounded-3xl">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-studio-blue mb-6">
                Music
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                  On travaille avec des rappeurs, des chanteuses, des auteurs et des musiciens aux univers variés. 
                  Certains ont une vision précise, d’autres apportent une intuition, une voix ou une énergie. 
                  Quel que soit le style de musique (Urbain, Pop, Electro, Néo classique...) chaque projet est construit sur-mesure, 
                  en respectant les influences et l’identité de l’artiste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-20" style={{ backgroundColor: '#f9f0e9' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-center font-playfair text-3xl md:text-4xl font-bold text-studio-blue mb-12">
            Découvrez quelques-unes de nos collaborations
          </h2>
          
          {/* Navigation et grille d'artistes */}
          <div className="relative">
            {/* Flèche gauche */}
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1 || isTransitioning}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-out ${
                currentPage === 1 || isTransitioning
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed scale-90' 
                  : 'bg-studio-blue text-white hover:bg-studio-blue/80 hover:scale-110 shadow-lg shadow-studio-blue/30 hover:shadow-studio-blue/50'
              }`}
            >
              <svg className={`w-6 h-6 transition-transform duration-300 ${!isTransitioning ? 'hover:-translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Flèche droite */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages || isTransitioning}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-out ${
                currentPage === totalPages || isTransitioning
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed scale-90' 
                  : 'bg-studio-blue text-white hover:bg-studio-blue/80 hover:scale-110 shadow-lg shadow-studio-blue/30 hover:shadow-studio-blue/50'
              }`}
            >
              <svg className={`w-6 h-6 transition-transform duration-300 ${!isTransitioning ? 'hover:translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Grille d'artistes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-16">
              {currentArtists.map((artist, index) => (
                <div
                  key={startIndex + index}
                  className={`rounded-2xl group hover:scale-105 transition-all duration-500 cursor-pointer transform ${
                    isTransitioning 
                      ? 'opacity-0 scale-95 translate-y-4' 
                      : 'opacity-100 scale-100 translate-y-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <div className="glass-card rounded-2xl overflow-hidden h-full">
                    <div className="aspect-square relative overflow-hidden">
                    {/* Image de l'artiste */}
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                      style={artist.name === "Gerson" ? { objectPosition: 'center top' } : {}}
                    />

                    {/* Overlay blanc qui disparaît au hover */}
                    <div className="absolute inset-0 bg-white/85 group-hover:bg-white/0 transition-all duration-300"></div>

                    {/* Description centrée qui disparaît au hover */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 z-10 group-hover:opacity-0 transition-opacity duration-300">
                      <i><p className="text-studio-blue text-center font-medium leading-relaxed">
                        {artist.description}
                      </p></i>
                    </div>

                    {/* Nom et genre qui disparaissent au hover */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="font-playfair text-2xl font-bold text-studio-blue mb-2">
                        {artist.name}
                      </h3>
                      <p className="text-studio-blue/80 font-medium">
                        {artist.genre}
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicateurs de pagination */}
          <div className="flex justify-center items-center mt-12">
            <div className="flex space-x-3">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => goToPage(i + 1)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out ${
                    currentPage === i + 1
                      ? 'bg-studio-blue scale-125 shadow-lg shadow-studio-blue/50'
                      : isTransitioning
                      ? 'bg-studio-blue/20 cursor-not-allowed'
                      : 'bg-studio-blue/30 hover:bg-studio-blue/60 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Artists;