import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Navbar from './components/Navbar';
import bgImage from './assets/bg.avif';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div
        className="top-0 left-0 fixed w-full h-[900px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-23"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/home2" element={<Home2 />} />
        </Routes>
         <Footer/>
      </div>
     
    </div>
  );
};

export default App;

