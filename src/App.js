import React from 'react';
import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Info from './components/Info';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Services />
     <Info />
     <Testimonials />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
