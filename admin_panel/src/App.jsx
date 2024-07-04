// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  return (
  <>
    <ToastContainer position="top-right" />
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/home" element={<HomePage />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
    </div>
  </> 
  );
};

export default App;
