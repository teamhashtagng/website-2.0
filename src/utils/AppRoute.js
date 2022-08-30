import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../views/Home'
import About from '../views/About';
// import Team from '../views/Team';
import Careers from '../views/Careers';
import ContactUs from '../views/Contact';
import NotFound from '../views/NotFound'
import JobApplication from '../views/JobApplication'
import JobDescription from '../views/JobDescription'
import ScrollToTop from './ScrollToTop';

const AppRoute = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about-us" element={<About />} />
        {/* <Route path="/team" element={<Team />} /> */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/job-description" element={<JobDescription />} />
        <Route path="/job-application" element={<JobApplication />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;