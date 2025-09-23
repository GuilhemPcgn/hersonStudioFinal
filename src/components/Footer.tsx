import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';

const Footer = () => {
  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Music', href: '/music' },
    { name: 'Synchro', href: '/synchro' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-700 backdrop-blur-sm relative overflow-hidden">
      {/* Effet de fond décoratif */}
      <div className="absolute inset-0 bg-gradient-to-r from-studio-blue/10 via-transparent to-studio-orange/10"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Carte des pages - Section gauche */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-white">
              Plan du site
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center space-x-2 text-studio-orange hover:text-white transition-all duration-300 transform hover:translate-x-1"
                >
                  <span className="relative">
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-studio-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </span>
                </Link>
              ))}
            </div>
            
            {/* Informations supplémentaires */}
            <div className="pt-6 border-t border-gray-600">
              <p className="text-gray-300 text-sm">
                Herson Studio - Création musicale professionnelle
              </p>
              <p className="text-gray-300 text-sm">
                © 2024 Tous droits réservés
              </p>
              <p className="text-gray-300 text-sm">
                Design & build by <a href="https://studiovega.dev" target="_blank" rel="noopener noreferrer" className="text-studio-orange hover:text-white transition-colors duration-300 underline decoration-studio-orange/30 hover:decoration-white decoration-2 underline-offset-2">Studio Vega</a>
              </p>
            </div>
          </div>

          {/* Section Réseaux sociaux - Section droite */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-white text-center md:text-left">
              Suivez-nous
            </h3>
            <p className="text-gray-300 text-sm text-center md:text-left max-w-xs">
              Restez connecté avec Herson Studio et découvrez nos dernières créations musicales
            </p>
            <div className="flex justify-center md:justify-start">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Ligne de séparation décorative */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 group">
              <img 
                src="/src/assets/LogoSimple.png" 
                alt="Logo Herson Studio" 
                className="h-8 w-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
              />
              <span className="font-playfair text-lg font-semibold text-white group-hover:scale-105 transition-transform duration-300">
                Herson Studio
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-6">
                <Link to="/contact" className="hover:text-studio-orange transition-colors hover:scale-105 transform duration-200">
                  Devis gratuit
                </Link>
                <span className="text-studio-orange">•</span>
                <Link to="/artistes" className="hover:text-studio-orange transition-colors hover:scale-105 transform duration-200">
                  Nos artistes
                </Link>
              </div>
              <span className="text-studio-orange">•</span>
              <div className="flex items-center space-x-6">
                <Link to="/mentions-legales" className="hover:text-studio-orange transition-colors hover:scale-105 transform duration-200">
                  Mentions légales
                </Link>
                <span className="text-studio-orange">•</span>
                <Link to="/politique-confidentialite" className="hover:text-studio-orange transition-colors hover:scale-105 transform duration-200">
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
