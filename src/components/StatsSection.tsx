import React from 'react';
import { Users, BookOpen, Award, Clock, TrendingUp, Star } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: '5,000+',
      label: 'Active Students',
      description: 'IIUC students trust our platform',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      number: '50+',
      label: 'Subjects Covered',
      description: 'Complete CSE curriculum',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: '95%',
      label: 'Success Rate',
      description: 'Students improve their grades',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: '24/7',
      label: 'AI Support',
      description: 'Always available to help',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: '10,000+',
      label: 'Problems Solved',
      description: 'Daily AI interactions',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: '4.9/5',
      label: 'Student Rating',
      description: 'Highly rated by users',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Trusted by Thousands of Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Our platform has helped countless IIUC students achieve academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-2xl ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-4xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-sky-blue transition-colors">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">
                {stat.label}
              </h3>
              
              <p className="text-gray-600 font-poppins">
                {stat.description}
              </p>

              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/5 to-soft-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Achievement Showcase */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-poppins">
                Join the Success Story
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Be part of IIUC's most successful student community. Our AI-powered platform has helped students achieve:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sky-blue rounded-full"></div>
                  <span>Higher GPA scores across all semesters</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-soft-green rounded-full"></div>
                  <span>Better understanding of complex CSE concepts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Successful placements in top tech companies</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-5xl font-bold text-sky-blue mb-2">98%</div>
                <div className="text-lg font-semibold mb-2">Pass Rate</div>
                <div className="text-gray-300 text-sm">Students who use our platform regularly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;