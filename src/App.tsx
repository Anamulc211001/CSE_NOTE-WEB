import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import SubjectsSection from './components/SubjectsSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <Hero />
      <FeaturesSection />
      <SubjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;