import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Course from './components/Course';
import Aboutus from './components/Aboutus';
import Events from './components/Events';
import Clubs from './components/Clubs';
import Profile from './components/Profile';
import Tutition from './components/Tutition';

// Importing additional components
import Articles from "./utils/Articles"
import SocialMedia from "./utils/SocialMedia"
import Testimonial from "./utils/Testimonial"
import EventImages from "./utils/EventImages"
import ContactForm from "./utils/ContactForm"
import Hiring from "./utils/Hiring"

function App() {
  return (
    <>
      {/* Router Section */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Clubs" element={<Clubs />} />
          <Route path="/Tutition" element={<Tutition />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>

      {/* Additional Components Section */}
      <EventImages />
      <SocialMedia />
      <Articles />
      <Testimonial />
      <div className="flex justify-center items-center w-[100%] h-[100vh]">
        <ContactForm />
      </div>
      <Hiring />
    </>
  );
}

export default App;
