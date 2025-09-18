import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const ArtistGallery = () => {
  // Placeholder artists - you can replace with real data
  const artists = [
    { name: "Austin.", image: "./artists/austin..png" },
    { name: "SevK", image: "./artists/" },
    { name: "Kiara", image: "./artists/" },
    { name: "Pénélope", image: "./artists/penelope.jpeg" },
    { name: "Solen", image: "./artists/" },
    { name: "Tifen", image: "./artists/TIF.jpg" },
    { name: "Tigre", image: "./artists/tigre.jpg" },
    { name: "Audrey", image: "./artists/" },
    { name: "Antoine Crop", image: "./artists/antoine.jpeg" },
    { name: "Gerson", image: "./artists/" },
  ];

  return (
    <section className="pt-20 pb-12 bg-studio-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-studio-blue mb-4">
            Music
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Découvrez les talents qui font confiance à Herson Studio
          </p>
        </div>

        {/* Scrolling Gallery */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-6">
            {[...artists, 
              ...artists, 
              ...artists, 
              ...artists, 
              ...artists, 
              ...artists
            ].map((artist, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-48 relative group">
                <div className="rounded-2xl overflow-hidden h-full p-0.5 bg-gradient-to-br from-blue-500 to-orange-500">
                  <div className="relative h-full rounded-2xl overflow-hidden bg-white">
                    <img 
                      src={artist.image} 
                      alt="Photo de l'artiste"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay blanc avec nom de l'artiste */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3">
                      <span className="font-playfair text-lg font-bold text-studio-blue block text-center">
                        {artist.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MatosGallery = () => {

  const matos = [
    { name: "Logic Pro.", image: "./matos/logicpro.webp" },
    { name: "UADx", image: "./matos/uadx.jpg" },
    { name: "Waves", image: "./matos/waves.jpg" },
    { name: "JUNO", image: "./matos/juno.jpg" },
    { name: "Soundtoys", image: "./matos/soundtoys.jpg" },
    { name: "Omnisphere", image: "./matos/omnisphere.png" },
    { name: "Prophet", image: "./matos/prophet.jpg" },
    { name: "Fender", image: "./matos/fender.jpg" },
    { name: "Gretsch", image: "./matos/gretsch.jpg" },
    { name: "Cort", image: "./matos/cort.jpg" },
    { name: "Piano Droit", image: "./matos/piano.jpg" },
    { name: "Fender Rhodes", image: "./matos/rhodes.avif" },
  ];

  return (
    <section className="pt-12 pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-studio-blue mb-4">
            Matos
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Les outils et instruments qui façonnent notre son
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-reverse space-x-6">
            {[
              ...matos,
              ...matos,
              ...matos,
              ...matos,
              ...matos,
              ...matos,
            ].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-56 h-56 relative group">
                <div className="rounded-2xl overflow-hidden h-full p-0.5 bg-gradient-to-br from-blue-500 to-orange-500">
                  <div className="relative h-full rounded-2xl overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={`Photo de ${item.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3">
                      <span className="font-playfair text-lg font-bold text-studio-blue block text-center">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// const NewsletterSection = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-studio-blue to-studio-orange">
//       <div className="container mx-auto px-6">
//         <div className="max-w-2xl mx-auto text-center">
//           <div className="glass-card p-12 rounded-3xl">
//             <Mail className="h-16 w-16 text-white mx-auto mb-6" />
//             <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
//               Restez informé
//             </h2>
//             <p className="text-white/90 text-lg mb-8">
//               Inscrivez-vous à notre newsletter pour recevoir les dernières actualités 
//               du studio et de nos artistes
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <Input
//                 type="email"
//                 placeholder="Votre email"
//                 className="glass-button text-white placeholder:text-white/60 border-white/30"
//               />
//               <Button 
//                 className="bg-white text-studio-blue hover:bg-white/90 px-6"
//               >
//                 S'inscrire
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const ReviewsSection = () => {
  const reviews = [
    {
      text: "J'ai trouvé mon son en 3 sessions.",
      author: "SevK"
    },
    {
      text: "On m'a aidée à structurer mon univers.",
      author: "Tifen"
    }
  ];

  return (
    <section className="pt-12 pb-20 bg-studio-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Avis
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ce que disent nos artistes sur leur expérience au studio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
              <div className="text-center">
                <div className="mb-6">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg key={starIndex} className="w-6 h-6 text-studio-orange" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg md:text-xl font-medium text-foreground mb-6 leading-relaxed">
                  "{review.text}"
                </blockquote>
                <cite className="font-playfair text-studio-blue font-bold text-lg">
                  — {review.author}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ArtistGallery />
      <div className="container mx-auto px-6">
        <div className="h-px bg-foreground/10" />
      </div>
      <MatosGallery />
      <ReviewsSection />
      {/* <NewsletterSection /> */}
    </main>
  );
};

export default Home;