// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import Login from './Components/Login/Login.jsx';
// index.js or App.js
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [isVerified,setVerified]=useState(false);

  return (
  <>
    <ToastContainer position="top-right" />
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Login isVerified={isVerified} setVerified={setVerified} />} />
        {/* <Route path="/home" element={ isVerified ? <HomePage isVerified={isVerified} setVerified={setVerified} /> :
      (<Navigate to="/" />)
      } /> */}
        <Route path='/home' element={<HomePage isVerified={isVerified} setVerified={setVerified} />} />
      </Routes>
    </Router>
    </div>
  </> 
  );
};

export default App;
