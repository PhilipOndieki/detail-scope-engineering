import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto pl-20 pr-6 sm:px-6 py-10 sm:py-12 md:pl-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Dualscope Engineering
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering excellence through quality industrial components and
              reliable service.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#bearings"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Bearings
                </a>
              </li>
              <li>
                <a
                  href="#pneumatics"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Pneumatics
                </a>
              </li>
              <li>
                <a
                  href="#chains"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Chains & Sprockets
                </a>
              </li>
              <li>
                <a
                  href="#belts"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Belts & Pulleys
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Connect with us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Dual Scope Engineering Inc.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors text-sm border-b border-transparent hover:border-white"
              >
                Contact
              </a>
              <a
                href="#careers"
                className="text-gray-400 hover:text-white transition-colors text-sm border-b border-transparent hover:border-white"
              >
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
