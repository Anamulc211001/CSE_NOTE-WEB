import React from 'react';
import { Code, Database, Cpu, Globe, HardDrive } from 'lucide-react';
import SubjectCard from './SubjectCard';

const SubjectsSection: React.FC = () => {
  const subjects = [
    {
      title: 'Programming Fundamentals',
      description: 'Master the basics of programming with C, C++, and Python. Learn data types, control structures, functions, and problem-solving techniques.',
      icon: <Code className="h-8 w-8" />,
      duration: '15+ hours',
      students: '1,200+',
      videoUrl: 'https://www.youtube.com/playlist?list=PLgH5QX0i9K3pCMBZcul1fta6UivHDbXvz',
      thumbnailUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Explore arrays, linked lists, stacks, queues, trees, graphs, and essential algorithms for competitive programming and interviews.',
      icon: <Cpu className="h-8 w-8" />,
      duration: '20+ hours',
      students: '950+',
      videoUrl: 'https://www.youtube.com/playlist?list=PLgH5QX0i9K3rAewCLdHKwSEIttO9-9F2j',
      thumbnailUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Database Management Systems',
      description: 'Learn SQL, database design, normalization, transactions, and modern database technologies including NoSQL and cloud databases.',
      icon: <Database className="h-8 w-8" />,
      duration: '12+ hours',
      students: '800+',
      videoUrl: 'https://www.youtube.com/playlist?list=PLgH5QX0i9K3rGCYijyYrYKyYcRvFhxm_E',
      thumbnailUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Computer Networks',
      description: 'Understand network protocols, OSI model, TCP/IP, routing, switching, and network security fundamentals.',
      icon: <Globe className="h-8 w-8" />,
      duration: '18+ hours',
      students: '700+',
      videoUrl: 'https://www.youtube.com/playlist?list=PLgH5QX0i9K3qKm5hYSJGYjg_sXsj4l_CX',
      thumbnailUrl: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Operating Systems',
      description: 'Dive into process management, memory management, file systems, scheduling algorithms, and system calls.',
      icon: <HardDrive className="h-8 w-8" />,
      duration: '16+ hours',
      students: '650+',
      videoUrl: 'https://www.youtube.com/playlist?list=PLgH5QX0i9K3qAJq_sK5cPHvJh5w_VPLch',
      thumbnailUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="subjects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Explore Our Subjects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Comprehensive video lectures, hand notes, and practice materials for all core CSE subjects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} {...subject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;