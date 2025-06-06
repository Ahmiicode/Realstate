import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Listing from './pages/Listing';
import Agent from './pages/Agent';
import Agency from './pages/Agency';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import ListingDetail from './pages/Listingdetail';
import Agentdetail from './pages/Agentdetail';
import Agencydetail from './pages/Agencydetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import bgImage from './assets/bg.avif';


const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div
        className="top-0 left-0 fixed w-full h-[900px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/about" element={<About />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/agent/:id" element={<Agentdetail />} />
          <Route path="/agency/:id" element={<Agencydetail />} />

        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;
