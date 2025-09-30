import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import ArtistGallery from '@/components/ArtistGallery';

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