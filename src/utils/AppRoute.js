import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../views/Home'
import MintNFT from '../views/MintNFT'
import Collections from '../views/Collections';

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/mint" element={<MintNFT />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;