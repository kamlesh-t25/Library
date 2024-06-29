import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import OrderTable from './Components/OrderTable';
import 'boxicons/css/boxicons.min.css';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
  <>
  <ToastContainer position="top-right"/>
    <div>
      <Sidebar isSidebarVisible={isSidebarVisible}/>
      <div id="content" style={{ left: isSidebarVisible ? '280px' : '60px' }}>
        <Navbar toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Main />
		  <OrderTable/>
      </div>
    </div>
  </>
  );
};

export default App;
