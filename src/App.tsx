import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SubjectsSection from './components/SubjectsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <Hero />
      <SubjectsSection />
      <Footer />
    </div>
  );
}

export default App;