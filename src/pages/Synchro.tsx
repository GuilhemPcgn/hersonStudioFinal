import { useState } from 'react';
import headerSynchro from '@/assets/headerSynchro.jpg';

const Synchro = () => {
    // Séparation des données en deux catégories
    const longsMetrages = [
      { name: "J'adore ce que vous faites", genre: "Film", image: "./synchro/jadore.jpg" },
      { name: "Papi Sitter", genre: "Film", image: "./synchro/papisitter.jpg" },
      { name: "Pour l'honneur", genre: "Film", image: "./synchro/honneur.jpg" },
      { name: "On voulait tout casser", genre: "Film", image: "./synchro/toutcasser.webp" },
      { name: "Fils à Jo", genre: "Film", image: "./synchro/filsajo.jpg" },
    ];

    const chainesTvPublicites = [
      { name: "France TV", genre: "Publicité", image: "./synchro/francetv.jpg" },
      { name: "Canal+", genre: "Publicité", image: "./synchro/canal+.jpg" },
      { name: "OTAN/NATO", genre: "Publicité", image: "./synchro/nato.png" },
      { name: "Coupe du Monde de Rugby 2023", genre: "Publicité", image: "./synchro/cdmrugby.jpg" },
      { name: "Vélo Club Tour de France", genre: "Générique", image: "./synchro/tourdefrance.webp" },
      { name: "TF1", genre: "Publicité", image: "./synchro/tf1.avif" },
    ];

    // État pour la catégorie actuelle (0 = Longs métrages, 1 = Chaînes TV & Publicités)
    const [currentCategory, setCurrentCategory] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // États pour la pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Déterminer les données actuelles selon la catégorie
    const currentData = currentCategory === 0 ? longsMetrages : chainesTvPublicites;
    const currentTitle = currentCategory === 0 ? "Longs métrages" : "Chaînes TV & Publicités";

    // Calculs pour la pagination
    const totalPages = Math.ceil(currentData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = currentData.slice(startIndex, endIndex);

    // Fonctions de navigation entre catégories
    const goToNextCategory = () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentCategory(prev => (prev + 1) % 2);
          setCurrentPage(1); // Reset à la première page
          setIsTransitioning(false);
        }, 150);
      }
    };

    const goToPreviousCategory = () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentCategory(prev => prev === 0 ? 1 : 0);
          setCurrentPage(1); // Reset à la première page
          setIsTransitioning(false);
        }, 150);
      }
    };

    // Fonctions de navigation pour la pagination
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
            src={headerSynchro} 
            alt="Background Synchro" 
            className="absolute inset-0 w-full h-full object-cover object-bottom opacity-20"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-md border border-white/30 shadow-2xl p-12 rounded-3xl">
                <h1 className="font-playfair text-4xl md:text-6xl font-bold text-studio-blue mb-6">
                  Synchro
                </h1>
                <p className="text-xl text-foreground/80 leading-relaxed">
                « Sous mon nom, Roméo Guillard, j’ai signé la musique originale de plusieurs longs-métrages, publicités, séries et documentaires.
                   Chaque projet est conçu sur-mesure, en étroite collaboration avec les réalisateurs et les agences, 
                   pour créer des univers riches et modernes adaptés à chaque format et à chaque audience. »
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Galerie Synchro */}
        <section className="py-20" style={{ backgroundColor: '#f9f0e9' }}>
          <div className="container mx-auto px-6">
            <h2 className="text-center font-playfair text-3xl md:text-4xl font-bold text-studio-blue mb-12">
              {currentTitle}
            </h2>
            
            {/* Navigation et grille */}
            <div className="relative">
              {/* Flèche gauche - Navigation entre catégories */}
              <button
                onClick={goToPreviousCategory}
                disabled={isTransitioning}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-out ${
                  isTransitioning
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed scale-90' 
                    : 'bg-studio-blue text-white hover:bg-studio-blue/80 hover:scale-110 shadow-lg shadow-studio-blue/30 hover:shadow-studio-blue/50'
                }`}
              >
                <svg className={`w-6 h-6 transition-transform duration-300 ${!isTransitioning ? 'hover:-translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Flèche droite - Navigation entre catégories */}
              <button
                onClick={goToNextCategory}
                disabled={isTransitioning}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-out ${
                  isTransitioning
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed scale-90' 
                    : 'bg-studio-blue text-white hover:bg-studio-blue/80 hover:scale-110 shadow-lg shadow-studio-blue/30 hover:shadow-studio-blue/50'
                }`}
              >
                <svg className={`w-6 h-6 transition-transform duration-300 ${!isTransitioning ? 'hover:translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Grille des projets */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-16">
                {currentItems.map((item, index) => (
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
                      <div className={`relative overflow-hidden ${
                        currentCategory === 0 ? '' : 'aspect-square'
                      }`}>
                        {/* Image du projet */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className={`w-full ${
                            currentCategory === 0 ? 'h-auto object-contain' : 'h-full object-cover'
                          }`}
                        />

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ligne de séparation */}
            <div className="flex justify-center items-center mt-12">
              <div className="w-24 h-px bg-studio-blue/20"></div>
            </div>

            {/* Slider de navigation entre catégories */}
            <div className="flex justify-center items-center mt-8">
              <div className="relative">
                {/* Slider background */}
                <div className="w-80 h-12 bg-white/30 rounded-full p-1 relative">
                  {/* Slider thumb */}
                  <div 
                    className={`absolute top-1 w-1/2 h-10 bg-white rounded-full shadow-lg transition-transform duration-300 ease-out ${
                      currentCategory === 0 ? 'translate-x-0' : 'translate-x-full'
                    }`}
                  />
                  
                  {/* Labels */}
                  <div className="relative z-10 flex h-full">
                    <button
                      onClick={() => {
                        if (currentCategory !== 0 && !isTransitioning) {
                          setIsTransitioning(true);
                          setTimeout(() => {
                            setCurrentCategory(0);
                            setCurrentPage(1);
                            setIsTransitioning(false);
                          }, 150);
                        }
                      }}
                      disabled={isTransitioning}
                      className={`flex-1 flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                        currentCategory === 0
                          ? 'text-studio-blue'
                          : 'text-studio-blue/70 hover:text-studio-blue'
                      }`}
                    >
                      Longs métrages
                    </button>
                    <button
                      onClick={() => {
                        if (currentCategory !== 1 && !isTransitioning) {
                          setIsTransitioning(true);
                          setTimeout(() => {
                            setCurrentCategory(1);
                            setCurrentPage(1);
                            setIsTransitioning(false);
                          }, 150);
                        }
                      }}
                      disabled={isTransitioning}
                      className={`flex-1 flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                        currentCategory === 1
                          ? 'text-studio-blue'
                          : 'text-studio-blue/70 hover:text-studio-blue'
                      }`}
                    >
                      TV & Publicités
                    </button>
                  </div>
                </div>
                
                {/* Points indicateurs */}
                <div className="flex justify-center space-x-2 mt-4">
                  <button
                    onClick={() => {
                      if (currentCategory !== 0 && !isTransitioning) {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentCategory(0);
                          setCurrentPage(1);
                          setIsTransitioning(false);
                        }, 150);
                      }
                    }}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentCategory === 0
                        ? 'bg-studio-blue scale-125 shadow-lg shadow-studio-blue/50'
                        : 'bg-studio-blue/30 hover:bg-studio-blue/60 hover:scale-110'
                    }`}
                  />
                  <button
                    onClick={() => {
                      if (currentCategory !== 1 && !isTransitioning) {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentCategory(1);
                          setCurrentPage(1);
                          setIsTransitioning(false);
                        }, 150);
                      }
                    }}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentCategory === 1
                        ? 'bg-studio-blue scale-125 shadow-lg shadow-studio-blue/50'
                        : 'bg-studio-blue/30 hover:bg-studio-blue/60 hover:scale-110'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default Synchro;