import { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import PlaceRequest from './Pages/PlaceRequest/PlaceRequest';
import Navbar from './Components/Navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app-body'>
      <Navbar/>
      <Router>
        <div className='app'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/placerequest' element={<PlaceRequest/> } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
