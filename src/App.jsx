import { BrowserRouter } from "react-router-dom";
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  }, []);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Grid Lines */}
        <div className="fixed inset-0 pointer-events-none max-w-7xl mx-auto z-50 border-x border-white/10"></div>
        
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
