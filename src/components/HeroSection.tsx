import { useEffect, useRef } from 'react';
import { Play, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import studioHero from '@/assets/posterHero.png';
import VideoHero from '@/assets/VideoHero.webm';


const HeroSection = () => {

const videoRef = useRef(null);

useEffect(() => {
  if (videoRef.current) {
    videoRef.current.playbackRate = 0.75;
  }
}, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={studioHero}
          className="w-full h-full object-cover"
        >
          <source src={VideoHero} type="video/webm" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="glass-card p-12 rounded-3xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold gradient-text mb-6">
            Herson Studio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Plus qu’un lieu d’enregistrement, c’est l’expertise et l’accompagnement d’un musicien compositeur au service de ton projet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline"
              asChild
              size="lg" 
              className="bg-studio-orange/50 hover:bg-studio-orange/75 hover:backdrop-blur-sm hover:border-studio-orange/50 border border-transparent text-white px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              <Link to="/music">
                <Play className="mr-2 h-5 w-5" />
                Découvrir nos créations
              </Link>
            </Button>
            <Button 
              variant="outline"
              asChild
              size="lg"
              className="backdrop-blur-sm bg-transparent hover:bg-studio-blue/20 text-white border-white/30 hover:border-studio-blue/50 px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              <Link to="/contact">
                Réserver une session
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default HeroSection;