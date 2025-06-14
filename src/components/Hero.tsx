import React from 'react';
import { Send, Code, BookOpen, Cpu, Database, Globe, Sparkles, Users, Award, TrendingUp, Bot } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-soft-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-random opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-white text-sm font-medium">AI-Powered Learning Platform</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
              Master
              <span className="bg-gradient-to-r from-sky-blue to-soft-green bg-clip-text text-transparent"> CSE</span>
              <br />
              with AI
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 font-poppins leading-relaxed">
              Revolutionary AI-powered study platform designed exclusively for IIUC Computer Science students. 
              Get personalized learning paths, instant doubt resolution, and comprehensive resources.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5000+</div>
                <div className="text-sm text-gray-400">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-400">Subjects Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">AI Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="group relative bg-gradient-to-r from-sky-blue to-soft-green hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <div className="flex items-center justify-center space-x-2">
                  <Bot className="h-5 w-5" />
                  <span>Start Learning with AI</span>
                  <Sparkles className="h-4 w-4 group-hover:animate-spin" />
                </div>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </button>
              
              <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
                Explore Resources
              </button>
            </div>

            {/* Telegram Groups */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Send className="h-6 w-6 text-sky-blue" />
                <span className="text-lg font-semibold text-white font-poppins">
                  Join Our Study Community
                </span>
                <div className="flex items-center space-x-1 bg-green-500/20 px-2 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Live</span>
                </div>
              </div>
              
              <div className="grid gap-3">
                <a
                  href="https://t.me/noms17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 bg-sky-blue/20 hover:bg-sky-blue/30 border border-sky-blue/30 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                  <span className="flex-1">Main Study Group</span>
                  <div className="flex items-center space-x-1 text-xs opacity-70">
                    <Users className="h-3 w-3" />
                    <span>2.5k+</span>
                  </div>
                </a>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://t.me/c/2044732114/616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-soft-green/20 hover:bg-soft-green/30 border border-soft-green/30 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm"
                  >
                    <Code className="h-4 w-4" />
                    <span>CP with Jamil Sir</span>
                  </a>
                  
                  <a
                    href="https://t.me/cse_7th_resourses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>CSE 7th Resources</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
              <div className="text-center">
                <div className="relative w-32 h-32 bg-gradient-to-br from-sky-blue to-soft-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Bot className="h-16 w-16 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                  AI Study Companion
                </h3>
                <p className="text-gray-300 font-poppins mb-6">
                  Get instant answers, personalized study plans, and 24/7 academic support powered by advanced AI
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-3 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-sky-blue mx-auto mb-2" />
                    <div className="text-sm text-white font-medium">Smart Analytics</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl">
                    <Award className="h-6 w-6 text-soft-green mx-auto mb-2" />
                    <div className="text-sm text-white font-medium">Achievement System</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Try AI Assistant Now
                </button>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 animate-float">
                <div className="bg-soft-green/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/20">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 animate-float-delayed">
                <div className="bg-sky-blue/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/20">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 animate-float-delayed">
                <div className="bg-orange-500/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/20">
                  <Database className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 animate-float">
                <div className="bg-purple-500/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/20">
                  <Globe className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/20 to-soft-green/20 rounded-3xl blur-3xl -z-10 transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;