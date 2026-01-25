import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Experience, Hero, Navbar, Works, Footer, ZobiquePage, HeroBackground } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative min-h-screen bg-primary overflow-hidden'>
        <HeroBackground />
        <div className='relative z-10'>
          <Navbar />
          <div className='pt-16'>
            <Routes>
              <Route path="/" element={
                <div className='relative'>
                  <Hero />
                </div>
              } />
              <Route path="/about" element={
                <>
                  <About />
                </>
              } />
              <Route path="/experience" element={
                <>
                  <Experience />
                </>
              } />
              <Route path="/work" element={
                <>
                  <ZobiquePage />
                  <Works />
                </>
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
