import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para adicionar blur/sombra
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links de navegação
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Classes', href: '#classes' },
    { name: 'About', href: '#about' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo / Nome do Projeto */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">CS</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-gradient hidden sm:block">
                Character Selector
              </span>
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle + Mobile Menu */}
          <div className="flex items-center space-x-2">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative w-12 h-12 rounded-lg glass hover:shadow-md transition-all group"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Sun
                  className={`w-5 h-5 transition-all duration-300 ${
                    isDark
                      ? 'rotate-90 scale-0 opacity-0'
                      : 'rotate-0 scale-100 opacity-100'
                  }`}
                  style={{ color: 'var(--accent-primary)' }}
                />
                <Moon
                  className={`w-5 h-5 absolute transition-all duration-300 ${
                    isDark
                      ? 'rotate-0 scale-100 opacity-100'
                      : '-rotate-90 scale-0 opacity-0'
                  }`}
                  style={{ color: 'var(--accent-primary)' }}
                />
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-12 h-12 rounded-lg glass hover:shadow-md transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 mx-auto" style={{ color: 'var(--accent-primary)' }} />
              ) : (
                <Menu className="w-5 h-5 mx-auto" style={{ color: 'var(--accent-primary)' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium transition-all hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;