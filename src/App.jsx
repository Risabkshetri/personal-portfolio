import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Experience, Hero, Navbar, Works, Footer, ZobiquePage, HeroBackground } from "./components";
import HomeContent from "./components/HomeContent";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative min-h-screen bg-[#F6F6EF] overflow-hidden text-black-100'>
        <HeroBackground />
        <div className='relative z-10'>
          <Navbar />
          <div className='pt-16'>
            <Routes>
              <Route path="/" element={
                 <div className='relative'>
                  <Hero />
                  <HomeContent />
                </div>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={
                <div className="pb-32 pt-10">
                  <Works />
                </div>
              } />
              <Route path="/skills" element={<Experience />} />
              <Route path="/contact" element={
                <div className="pt-20 pb-40 max-w-4xl mx-auto px-6">
                  <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold text-black-100 font-serif leading-tight mb-8">Contact.</h1>
                  <p className="text-[16px] md:text-[18px] text-secondary leading-[1.8] mb-12">
                    Open to select full-time, consulting, or strategic partnership opportunities. My core interests right now are AI agentic workflows, infra, and scaling high-quality career technology. <br /><br />Feel free to reach out directly via email or connect on LinkedIn.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <a href="mailto:ceo@zobique.com" className="bg-white border border-black-100/10 p-6 flex justify-between items-center group hover:border-[#FF6600] transition-colors">
                      <span className="text-[18px] font-medium group-hover:text-[#FF6600]">ceo@zobique.com</span>
                      <span className="text-secondary text-[14px] uppercase tracking-wider">Email</span>
                    </a>
                    <a href="https://linkedin.com/in/rishab-chhetri" target="_blank" rel="noopener noreferrer" className="bg-white border border-black-100/10 p-6 flex justify-between items-center group hover:border-[#FF6600] transition-colors">
                      <span className="text-[18px] font-medium group-hover:text-[#FF6600]">in/rishab-chhetri</span>
                      <span className="text-secondary text-[14px] uppercase tracking-wider">LinkedIn</span>
                    </a>
                    <a href="https://github.com/RisabKshetri" target="_blank" rel="noopener noreferrer" className="bg-white border border-black-100/10 p-6 flex justify-between items-center group hover:border-[#FF6600] transition-colors">
                      <span className="text-[18px] font-medium group-hover:text-[#FF6600]">@RisabKshetri</span>
                      <span className="text-secondary text-[14px] uppercase tracking-wider">GitHub</span>
                    </a>
                  </div>
                </div>
              } />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
