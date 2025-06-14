import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Rashida Akter',
      batch: 'CSE 7th Semester',
      rating: 5,
      text: 'The AI assistant helped me understand complex algorithms in minutes. My grades improved significantly after using this platform!',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Mohammad Rahman',
      batch: 'CSE 5th Semester',
      rating: 5,
      text: 'Best study resource for IIUC CSE students. The hand notes and AI explanations are incredibly helpful for exam preparation.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Fatima Khan',
      batch: 'CSE 6th Semester',
      rating: 5,
      text: 'The 24/7 AI support is a game-changer. I can get help with coding problems anytime, even at 2 AM before exams!',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Ahmed Hassan',
      batch: 'CSE 8th Semester',
      rating: 5,
      text: 'Thanks to this platform, I secured a job at a top tech company. The interview preparation materials are outstanding!',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Sadia Islam',
      batch: 'CSE 4th Semester',
      rating: 5,
      text: 'The personalized study plans helped me manage my time better. I went from struggling to being among the top students.',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Karim Abdullah',
      batch: 'CSE 7th Semester',
      rating: 5,
      text: 'The collaborative learning features are amazing. Study groups and peer discussions made learning so much more engaging.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            What Students Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Real feedback from IIUC CSE students who transformed their academic journey with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-sky-blue/20">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 font-poppins leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sky-blue/20"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 font-poppins">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.batch}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/5 to-soft-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Based on 2,500+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;