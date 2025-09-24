import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';

const ArtistGallery = () => {
  // Placeholder artists - you can replace with real data
  const artists = [
    { name: "Austin.", image: "./artists/austin..webp" },
    { name: "SevK", image: "./artists/SevK.webp" },
    { name: "Kiara", image: "./artists/KIARA.webp" },
    { name: "Pénélope", image: "./artists/penelope.webp" },
    { name: "Solen", image: "./artists/SOlen.webp" },
    { name: "Tifen", image: "./artists/TIF.webp" },
    { name: "Tigre", image: "./artists/tigre.webp" },
    { name: "Audrey", image: "./artists/Audrey.webp" },
    { name: "Antoine Crop", image: "./artists/antoine.webp" },
    { name: "Gerson", image: "./artists/Gerson.webp" },
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
                      style={artist.name === "Gerson" ? { objectPosition: 'center top' } : {}}
                    />
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
      {/* <MatosGallery /> */}
      {/* <ReviewsSection /> */}
      {/* <NewsletterSection /> */}
    </main>
  );
};

export default Home;