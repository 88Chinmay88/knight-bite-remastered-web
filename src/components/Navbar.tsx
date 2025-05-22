
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-knight-black py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-serif text-2xl md:text-3xl font-bold">
          <span className="text-knight-gold">Knight</span> Bite
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-knight-gold transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-knight-gold transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className="text-white hover:text-knight-gold transition-colors font-medium"
          >
            Menu
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-white hover:text-knight-gold transition-colors font-medium"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-knight-gold transition-colors font-medium"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('reservation')}
            className="bg-knight-gold hover:bg-knight-gold/80 text-knight-black"
          >
            Book a Table
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-knight-gold"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-knight-black/95 absolute top-full left-0 w-full animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-knight-gold transition-colors font-medium py-2 border-b border-knight-gold/20"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-knight-gold transition-colors font-medium py-2 border-b border-knight-gold/20"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-knight-gold transition-colors font-medium py-2 border-b border-knight-gold/20"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-knight-gold transition-colors font-medium py-2 border-b border-knight-gold/20"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-knight-gold transition-colors font-medium py-2 border-b border-knight-gold/20"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('reservation')}
              className="bg-knight-gold hover:bg-knight-gold/80 text-knight-black w-full"
            >
              Book a Table
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
