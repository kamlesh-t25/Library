// HomePage.jsx
import React, { useState, useEffect } from 'react';
// import Sidebar from './Components/Sidebar';
import Sidebar from '../Sidebar.jsx';
// import Navbar from './Components/Navbar';
import Navbar from '../Navbar.jsx';
// import Main from './Components/Main';
import Main from '../Main.jsx';
// import OrderTable from './Components/OrderTable';
import OrderTable from '../OrderTable.jsx';
// import AddBook from './Components/AddBook/AddBook';
import AddBook from '../AddBook/AddBook.jsx';
// import Mystore from './Components/MyStore/MyStore.jsx';
import Mystore from '../MyStore/MyStore.jsx';
import 'boxicons/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './HomePage.css';

const HomePage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeComponent, setActiveComponent] = useState('Main'); // Add state to track the active component

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 770) {
        setIsSidebarVisible(false); 
      } else {
        setIsSidebarVisible(true); 
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      if (isSidebarVisible) {
        document.getElementById('sidebar').style.width = '';
        document.getElementById('content').style.width = 'calc(100% - 280px)';
        document.getElementById('content').style.height = '100vh';
      } else {
        document.getElementById('sidebar').style.width = 'auto';
        document.getElementById('content').style.width = 'calc(100% - 60px)';
        document.getElementById('content').style.height = '100vh';
      }
    }
  }, [isSidebarVisible]);

  return (
    <>
      <ToastContainer position="top-right" />
      <div>
        <Sidebar isSidebarVisible={isSidebarVisible} setActiveComponent={setActiveComponent} />
        <div id="content" style={{ left: isSidebarVisible ? '280px' : '60px' }}>
          <Navbar toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          {activeComponent === 'Main' && <Main />}
          {activeComponent === 'OrderTable' && <OrderTable />}
          {activeComponent === 'AddBook' && <AddBook />}
          {activeComponent === 'MyStore' && <Mystore />}
        </div>
      </div>
    </>
  );
};

export default HomePage;
