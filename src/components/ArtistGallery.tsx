import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import ArtistCard from '@/components/ArtistCard';

// Images d'artistes depuis le dossier public
const austinImage = '/artists/austin..webp';
const sevkImage = '/artists/SevK.webp';
const kiaraImage = '/artists/KIARA.webp';
const penelopeImage = '/artists/penelope.webp';
const solenImage = '/artists/SOlen.webp';
const tifImage = '/artists/TIF.webp';
const tigreImage = '/artists/tigre.webp';
const audreyImage = '/artists/Audrey.webp';
const antoineImage = '/artists/antoine.webp';
const gersonImage = '/artists/Gerson.webp';

const ArtistGallery = () => {
  const artists = [
    { name: "Austin.", image: "austin..webp", src: austinImage },
    { name: "SevK", image: "SevK.webp", src: sevkImage },
    { name: "Kiara", image: "KIARA.webp", src: kiaraImage },
    { name: "Pénélope", image: "penelope.webp", src: penelopeImage },
    { name: "Solen", image: "SOlen.webp", src: solenImage },
    { name: "Tifen", image: "TIF.webp", src: tifImage },
    { name: "Tigre", image: "tigre.webp", src: tigreImage },
    { name: "Audrey", image: "Audrey.webp", src: audreyImage },
    { name: "Antoine Crop", image: "antoine.webp", src: antoineImage },
    { name: "Gerson", image: "Gerson.webp", src: gersonImage },
  ];

  return (
    <section className="pt-20 pb-12 bg-studio-beige section-container">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-studio-blue mb-4">
            Music
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Découvrez les talents qui font confiance à Herson Studio
          </p>
        </div>

        {/* Infinite Marquee Gallery */}
        <div className="marquee">
          <div className="marquee__track">
            {/* Premier set d'artistes */}
            {artists.map((artist, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <ArtistCard
                  name={artist.name}
                  image={artist.image}
                  src={artist.src}
                  index={index}
                />
              </div>
            ))}
            {/* Deuxième set d'artistes */}
            {artists.map((artist, index) => (
              <div key={`second-${index}`} className="flex-shrink-0" aria-hidden="true">
                <ArtistCard
                  name={artist.name}
                  image={artist.image}
                  src={artist.src}
                  index={index}
                />
              </div>
            ))}
            {/* Troisième set d'artistes */}
            {artists.map((artist, index) => (
              <div key={`third-${index}`} className="flex-shrink-0" aria-hidden="true">
                <ArtistCard
                  name={artist.name}
                  image={artist.image}
                  src={artist.src}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex justify-center">
          <Link 
            to="/artists"
            className="group relative inline-flex items-center gap-4 px-10 py-6 bg-white border-2 border-studio-blue text-studio-blue font-bold text-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
          >
            {/* Fond animé au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-studio-blue to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            {/* Icône */}
            <div className="relative z-10 bg-studio-blue/10 group-hover:bg-white/20 p-3 rounded-full transition-all duration-300">
              <Users className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
            </div>
            
            {/* Texte */}
            <span className="relative z-10 font-playfair group-hover:text-white transition-colors duration-300">
              Découvrir tous nos artistes
            </span>
            
            {/* Flèche avec effet magnétique */}
            <div className="relative z-10">
              <ArrowRight className="w-6 h-6 group-hover:text-white transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </div>
            
            {/* Points décoratifs animés */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-studio-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"></div>
            <div className="absolute bottom-2 right-4 w-2 h-2 bg-studio-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-studio-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArtistGallery;
