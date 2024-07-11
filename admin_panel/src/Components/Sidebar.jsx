import React, { useState } from 'react';
import './Sidebar.css'; 
import {useNavigate} from 'react-router-dom';


const Sidebar = ({ isSidebarVisible, setActiveComponent,isVerified,setVerified }) => { // Receive setActiveComponent as a prop
  const [activeItem, setActiveItem] = useState('Dashboard'); // Default active item
  const navigate=useNavigate();
  const handleItemClick = (itemName, component) => {
    setActiveItem(itemName);
    setActiveComponent(component); // Set the active component
  };

  const logoutHandler=()=>{
    localStorage.removeItem('adminState');
    localStorage.removeItem('loginTimestamp');
    setVerified(false);
    navigate("/");
  }

  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>eLibrary</span>
      </a>
      <ul className="side-menu top">
        <li className={activeItem === 'Dashboard' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Dashboard', 'Main')}>
            <i className="bx bxs-dashboard"></i>
            <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>Dashboard</span>
          </a>
        </li>
        <li className={activeItem === 'User Details' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('User Details', 'UserDetails')}> 
            <i className='bx bxs-user-detail'></i>
            <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>User Details</span>
          </a>
        </li>
        <li className={activeItem === 'My Store' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('My Store', 'Mystore')}>
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>My Store</span>
          </a>
        </li>
        <li className={activeItem === 'Add Book' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Add Book', 'AddBook')}>
            <i className='bx bxs-book-add'></i>
            <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>Add Book</span>
          </a>
        </li>
        <li className={activeItem === 'Analytics' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Analytics', 'OrderTable')}> 
            <i className="bx bxs-doughnut-chart"></i>
            <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>Order Management</span>
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#" className="logout" onClick={logoutHandler}>
            <i className="bx bxs-log-out-circle"></i>
            <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
