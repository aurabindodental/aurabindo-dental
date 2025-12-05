import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import mainLogo from '@/assets/main-logo.png';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Dental Tourism', path: '/dental-tourism' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 box-border transition-smooth ${
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-soft' : 'bg-card lg:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={mainLogo}
              alt="Aurobindo Dental logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">
                Aurobindo Dental
              </span>
              <span className="text-xs text-secondary leading-tight">Hospital</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a href="tel:9866937777" className="hidden md:block">
              <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary hover:bg-muted rounded-lg transition-smooth"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (absolute so header height stays fixed) */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 right-0 z-40 pb-4 animate-fade-in bg-card shadow-soft">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-2 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                      isActive(link.path)
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
