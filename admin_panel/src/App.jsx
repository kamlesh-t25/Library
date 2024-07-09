import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import Login from './Components/Login/Login.jsx';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [isVerified, setVerified] = useState(false);

  useEffect(() => {
    const adminState = localStorage.getItem('adminState');
    const loginTimestamp = localStorage.getItem('loginTimestamp');
    
    if (adminState === 'true' && loginTimestamp) {
      const currentTime = new Date().getTime();
      const oneHour = 60 * 60 * 1000;
      if (currentTime - loginTimestamp < oneHour) {
        setVerified(true);
      } else {
        localStorage.removeItem('adminState');
        localStorage.removeItem('loginTimestamp');
        setVerified(false);
      }
    }
  }, []);

  return (
    <>
      <ToastContainer position="top-right" />
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Login isVerified={isVerified} setVerified={setVerified} />} />
            <Route path="/home" element={isVerified ? <HomePage isVerified={isVerified} setVerified={setVerified} /> : <Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
