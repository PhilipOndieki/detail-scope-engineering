import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll events from affecting header background
  useEffect(() => {
    setIsScrolled(true);
  }, []);

  const productCategories = [
    'Bearings',
    'Pneumatics',
    'Chains and Sprockets',
    'Belts',
    'Pulleys',
    'Seals',
    'Steam Systems',
    'Water Treatment'
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 md:pl-20">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <img
              src="/DUALSCOPE-LOGO-REVISED.png"
              alt="Dual Scope Engineering"
              className="h-10 sm:h-14 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-xl rounded-lg overflow-hidden">
                  <div className="grid grid-cols-4 gap-4 p-6 min-w-[800px]">
                    {productCategories.map((category, index) => (
                      <a
                        key={index}
                        href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-4 py-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all font-medium rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-md"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#team"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </a>

            <a
              href="#careers"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Careers
            </a>

            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded font-medium transition-colors"
            >
              Talk to Our Team
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>

              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 font-medium transition-colors px-4 py-2"
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProductsOpen && (
                  <div className="pl-8 pr-4 py-2 space-y-2">
                    {productCategories.map((category, index) => (
                      <a
                        key={index}
                        href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-gray-600 hover:text-red-600 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#team"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>

              <a
                href="#careers"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </a>

              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-medium transition-colors mx-4 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
