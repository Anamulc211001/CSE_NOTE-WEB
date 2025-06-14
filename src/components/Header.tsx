import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-sky-blue" />
            <span className="text-xl font-semibold text-gray-900 font-poppins">
              IIUC CSE Resources
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#subjects" className="text-gray-700 hover:text-sky-blue transition-colors font-medium">
              Subjects
            </a>
            <a href="#about" className="text-gray-700 hover:text-sky-blue transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-sky-blue transition-colors font-medium">
              Contact
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#subjects" className="block px-3 py-2 text-gray-700 hover:text-sky-blue transition-colors font-medium">
                Subjects
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-sky-blue transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-sky-blue transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;