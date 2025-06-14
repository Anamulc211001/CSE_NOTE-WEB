import React from 'react';
import { Bot, Brain, Target, Clock, Users, Award, Zap, Shield } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'AI Study Assistant',
      description: 'Get instant answers to your CSE questions with our advanced AI that understands your learning style.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Personalized Learning',
      description: 'AI-powered study plans tailored to your strengths, weaknesses, and academic goals.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Smart Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics and performance insights.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Availability',
      description: 'Access study materials and AI assistance anytime, anywhere. Never miss a learning opportunity.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaborative Learning',
      description: 'Join study groups, participate in discussions, and learn together with fellow IIUC students.',
      color: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-50',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Achievement System',
      description: 'Earn badges, unlock achievements, and compete with peers to stay motivated.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Quick Solutions',
      description: 'Get step-by-step solutions to coding problems and complex CSE concepts instantly.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Verified Content',
      description: 'All study materials are verified by IIUC faculty and top-performing students.',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-50',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-blue/10 border border-sky-blue/20 rounded-full px-4 py-2 mb-6">
            <Bot className="h-4 w-4 text-sky-blue" />
            <span className="text-sky-blue text-sm font-medium">AI-Powered Features</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Experience the future of education with cutting-edge AI technology designed specifically for CSE students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins group-hover:text-sky-blue transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 font-poppins text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sky-blue to-soft-green p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Ready to Transform Your Learning?</h3>
            <p className="text-lg mb-6 opacity-90">Join thousands of IIUC students who are already using AI to excel in their studies</p>
            <button className="bg-white text-sky-blue px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;