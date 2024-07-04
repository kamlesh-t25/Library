// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import Login from './Components/Login/Login.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/home" element={<HomePage />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
