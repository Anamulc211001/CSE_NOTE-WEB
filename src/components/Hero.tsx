import React from 'react';
import { Send, Code, BookOpen, Cpu, Database, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-light-blue via-white to-light-green py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
              Your Gateway to
              <span className="text-sky-blue"> CSE Excellence</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 font-poppins">
              Access comprehensive study materials, hand notes, and resources 
              specifically curated for IIUC Computer Science & Engineering students.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Send className="h-6 w-6 text-sky-blue" />
                <span className="text-lg font-semibold text-gray-900 font-poppins">
                  Join Our Study Community
                </span>
              </div>
              <p className="text-gray-600 mb-6 font-poppins">
                Get access to all hand notes, past papers, and study materials By Abdullah Al Noman
              </p>
              
              <div className="space-y-3">
                <a
                  href="https://t.me/noms17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-sky-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
                >
                  <Send className="h-5 w-5" />
                  <span>Main Study Group - @noms17</span>
                </a>
                
                <a
                  href="https://t.me/c/2044732114/616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-soft-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
                >
                  <Send className="h-5 w-5" />
                  <span>CP with Jamil Sir</span>
                </a>
                
                <a
                  href="https://t.me/cse_7th_resourses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
                >
                  <Send className="h-5 w-5" />
                  <span>CSE 7th Resources</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-sky-blue to-soft-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                  Study Smart, Not Hard
                </h3>
                <p className="text-gray-600 font-poppins">
                  Join thousands of IIUC students who trust our resources for academic success
                </p>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -left-4 animate-float">
                <div className="bg-soft-green p-3 rounded-full shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 animate-float-delayed">
                <div className="bg-sky-blue p-3 rounded-full shadow-lg">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 animate-float-delayed">
                <div className="bg-orange-500 p-3 rounded-full shadow-lg">
                  <Database className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 animate-float">
                <div className="bg-purple-500 p-3 rounded-full shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;