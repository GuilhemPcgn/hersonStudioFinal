import { useEffect, useRef, useState } from 'react';
import { Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLazyVideo } from '@/hooks/use-lazy-video';


const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [canStartVideo, setCanStartVideo] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  
  const videoRef = useLazyVideo({
    fallbackDelay: 1000,
    intersectionThreshold: 0.1
  });

  // Détecter le premier scroll et attendre que l'utilisateur arrête de scroller
  useEffect(() => {
    let rafId: number | null = null;
    
    const handleScroll = () => {
      if (!userHasScrolled) {
        setUserHasScrolled(true);
      }
      
      // Throttle avec RAF
      if (rafId !== null) return;
      
      rafId = requestAnimationFrame(() => {
        // Clear le timeout précédent
        if (scrollTimeoutRef.current !== null) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        // Attendre 500ms après que l'utilisateur arrête de scroller
        scrollTimeoutRef.current = window.setTimeout(() => {
          setCanStartVideo(true);
        }, 500);
        
        rafId = null;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Si l'utilisateur ne scroll pas dans les 2 premières secondes, démarrer la vidéo
    const initialTimeout = setTimeout(() => {
      if (!userHasScrolled) {
        setCanStartVideo(true);
      }
    }, 1500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initialTimeout);
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [userHasScrolled]);

  // Gérer le chargement et la lecture de la vidéo
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.playbackRate = 0.75;
      
      const handleCanPlay = () => {
        setVideoLoaded(true);
      };
      
      const handleLoadStart = () => {
        console.log('Début du chargement de la vidéo');
      };
      
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadstart', handleLoadStart);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadstart', handleLoadStart);
      };
    }
  }, []);

  // Démarrer la lecture quand autorisé
  useEffect(() => {
    if (videoRef.current && canStartVideo && !videoPlaying) {
      const video = videoRef.current;
      
      // Avec preload="none", play() déclenche le chargement
      video.play().then(() => {
        setVideoPlaying(true);
      }).catch((error) => {
        console.error('Erreur lors de la lecture de la vidéo:', error);
      });
    }
  }, [canStartVideo, videoPlaying]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          ref={videoRef}
          playsInline
          muted
          loop
          preload="none"
          poster="/assets/posterHero.webp"
          data-lazy="true"
          className={`hero-video w-full h-full object-cover transition-opacity duration-1000 ${
            videoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            // Le poster sera affiché par défaut, la vidéo apparaîtra en fondu
            backgroundImage: 'url(/assets/posterHero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <source src="/assets/VideoHero.webm" type="video/webm" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        
        {/* Poster de fallback affiché tant que la vidéo n'est pas en lecture */}
        {!videoPlaying && (
          <div 
            className="absolute inset-0 w-full h-full transition-opacity duration-1000"
            style={{
              backgroundImage: 'url(/assets/posterHero.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: videoPlaying ? 0 : 1
            }}
          />
        )}
        
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="glass-card card-container p-12 rounded-3xl">
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

      {/* Scroll Indicator - Enhanced */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110"
        aria-label="Défiler vers le contenu"
      >
        <span className="text-white/90 text-sm font-medium tracking-wider uppercase animate-pulse group-hover:text-white">
          Découvrir
        </span>
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-full p-3 group-hover:bg-white/20 transition-all duration-300">
            <ChevronDown className="h-6 w-6 text-white animate-bounce" />
          </div>
        </div>
      </button>
    </section>
  );
};

export default HeroSection;