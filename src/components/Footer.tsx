import React from 'react';
import { BookOpen, Send, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-sky-blue" />
              <span className="text-xl font-semibold font-poppins">
                IIUC CSE Resources
              </span>
            </div>
            <p className="text-gray-300 mb-4 font-poppins">
              Your trusted companion for Computer Science & Engineering studies at IIUC. 
              We provide comprehensive study materials, hand notes, and resources to help you excel in your academic journey.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/noms17"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-blue hover:bg-blue-600 p-3 rounded-lg transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#subjects" className="text-gray-300 hover:text-white transition-colors font-poppins">
                  All Subjects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors font-poppins">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-poppins">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sky-blue" />
                <span className="text-gray-300 font-poppins">support@iiuccse.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sky-blue" />
                <span className="text-gray-300 font-poppins">+880 1XXX-XXXXXX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center space-y-2">
            <p className="text-gray-400 font-poppins">
              © 2024 IIUC CSE Resources. Made with ❤️ for IIUC students.
            </p>
            <p className="text-gray-500 text-sm font-poppins">
              Designed & Developed by <span className="text-sky-blue font-medium">Md Anamul Haque</span> (CS Engineer & UI/UX Designer)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;