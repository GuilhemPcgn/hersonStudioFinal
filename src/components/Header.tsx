import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/LogoSimple.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Music', href: '/music' },
    { name: 'Synchro', href: '/synchro' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src={logo} 
                alt="Logo Herson Studio" 
                className="h-12 w-12 text-studio-blue" 
              />
            <span className="font-playfair text-2xl font-bold gradient-text">
              Herson Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isScrolled || !isHomePage ? 'text-studio-blue' : 'text-white'
                } hover:text-studio-blue transition-colors relative group`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-studio-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
            <Link to="/contact#contact-form">
              <button className="glass-button gradient-text hover:text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                Devis Gratuit
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-2xl p-6">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-studio-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact#contact-form" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="glass-button gradient-text hover:text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 mt-4">
                  Devis Gratuit
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;