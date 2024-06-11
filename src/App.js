import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      
          <Routes>
            <Route path="/contact" element={<HomePage/>} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
       
    </Router>
  );
}

export default App;
