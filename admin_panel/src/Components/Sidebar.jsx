import React, { useState } from 'react';
import './Sidebar.css'; // Assuming you have a CSS file for styling

const Sidebar = ({ isSidebarVisible }) => {
  const [activeItem, setActiveItem] = useState('Dashboard'); // Default active item

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  // if( prop.isSidebarVisible === true ){
  //   document.getElementById('sidebar').style.width = 'unset';
  // }

  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>AdminHub</span>
      </a>
      <ul className="side-menu top">
        <li className={activeItem === 'Dashboard' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Dashboard')}>
            <i className="bx bxs-dashboard"></i>
            <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>Dashboard</span>
          </a>
        </li>
        <li className={activeItem === 'My Store' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('My Store')}>
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>My Store</span>
          </a>
        </li>
        <li className={activeItem === 'Analytics' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Analytics')}>
            <i className="bx bxs-doughnut-chart"></i>
            <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>Analytics</span>
          </a>
        </li>
        <li className={activeItem === 'Message' ? 'active' : ''}>
          <a href="#" onClick={() => handleItemClick('Message')}>
            <i className="bx bxs-message-dots"></i>
            <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>Message</span>
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className={`text ${!isSidebarVisible ? 'hidden' : ''}`}>Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
