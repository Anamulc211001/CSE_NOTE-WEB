import React from 'react';
import { BookOpen, Send, Mail, Phone, MapPin, Clock, Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-sky-blue to-soft-green p-2 rounded-xl">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold font-poppins">
                  IIUC CSE Resources
                </span>
                <div className="text-sm text-gray-400">AI-Powered Learning Platform</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-md">
              Empowering IIUC Computer Science & Engineering students with cutting-edge AI technology, 
              comprehensive study materials, and personalized learning experiences for academic excellence.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a
                href="https://t.me/noms17"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-sky-blue/20 hover:bg-sky-blue border border-sky-blue/30 hover:border-sky-blue p-3 rounded-xl transition-all duration-300"
              >
                <Send className="h-5 w-5 text-sky-blue group-hover:text-white" />
              </a>
              <a
                href="mailto:support@iiuccse.edu"
                className="group bg-soft-green/20 hover:bg-soft-green border border-soft-green/30 hover:border-soft-green p-3 rounded-xl transition-all duration-300"
              >
                <Mail className="h-5 w-5 text-soft-green group-hover:text-white" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="text-lg font-bold text-sky-blue">5000+</div>
                <div className="text-xs text-gray-400">Students</div>
              </div>
              <div className="text-center bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="text-lg font-bold text-soft-green">50+</div>
                <div className="text-xs text-gray-400">Subjects</div>
              </div>
              <div className="text-center bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="text-lg font-bold text-yellow-400">24/7</div>
                <div className="text-xs text-gray-400">AI Support</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins flex items-center">
              <div className="w-1 h-6 bg-sky-blue rounded-full mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'All Subjects', href: '#subjects' },
                { name: 'AI Assistant', href: '#ai-assistant' },
                { name: 'Study Groups', href: '#community' },
                { name: 'Progress Tracking', href: '#progress' },
                { name: 'Achievement System', href: '#achievements' },
                { name: 'Help Center', href: '#help' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors font-poppins flex items-center group"
                  >
                    <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins flex items-center">
              <div className="w-1 h-6 bg-soft-green rounded-full mr-3"></div>
              Contact & Support
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-sky-blue mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Email Support</div>
                  <div className="text-gray-300 text-sm">support@iiuccse.edu</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-soft-green mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-gray-300 text-sm">+880 1XXX-XXXXXX</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-gray-300 text-sm">IIUC Campus, Chittagong</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">AI Support</div>
                  <div className="text-gray-300 text-sm">Available 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Study Groups Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold mb-6 font-poppins text-center">
            Join Our Active Study Communities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://t.me/noms17"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-sky-blue/10 hover:bg-sky-blue/20 border border-sky-blue/30 p-4 rounded-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <Send className="h-6 w-6 text-sky-blue" />
                <div>
                  <div className="font-semibold text-white">Main Study Group</div>
                  <div className="text-sm text-gray-300">@noms17 • 2.5k+ members</div>
                </div>
              </div>
            </a>
            
            <a
              href="https://t.me/c/2044732114/616"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-soft-green/10 hover:bg-soft-green/20 border border-soft-green/30 p-4 rounded-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <Send className="h-6 w-6 text-soft-green" />
                <div>
                  <div className="font-semibold text-white">CP with Jamil Sir</div>
                  <div className="text-sm text-gray-300">Competitive Programming</div>
                </div>
              </div>
            </a>
            
            <a
              href="https://t.me/cse_7th_resourses"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 p-4 rounded-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <Send className="h-6 w-6 text-purple-400" />
                <div>
                  <div className="font-semibold text-white">CSE 7th Resources</div>
                  <div className="text-sm text-gray-300">Semester-specific materials</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 font-poppins">
                © 2024 IIUC CSE Resources. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm font-poppins mt-1">
                Empowering students with AI-powered education technology
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-sm">Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="text-sm">for IIUC students by</span>
              <span className="text-sky-blue font-medium">Md Anamul Haque</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;