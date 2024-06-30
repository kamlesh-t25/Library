import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Navbar = ({ toggleSidebar, isDarkMode, toggleDarkMode }) => {
  return (
    <nav>
      <i className="bx bx-menu" onClick={toggleSidebar}></i>
      <a href="#" className="nav-link">Categories</a>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn"><i className="bx bx-search"></i></button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden onChange={toggleDarkMode} checked={isDarkMode} />
      <label htmlFor="switch-mode" className="switch-mode"></label>
    </nav>
  );
};

export default Navbar;
