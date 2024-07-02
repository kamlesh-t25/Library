import React, { useEffect, useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Navbar = ({ toggleSidebar, isDarkMode, toggleDarkMode }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update window width state on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      {windowWidth > 770 && (
        <i className="bx bx-menu" onClick={toggleSidebar}></i>
      )}
      <a href="#" className="nav-link">Dashboard</a>
      <form action="#">
        <div className="form-input">
          {/* Your form inputs here */}
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden onChange={toggleDarkMode} checked={isDarkMode} />
      <label htmlFor="switch-mode" className="switch-mode"></label>
    </nav>
  );
};

export default Navbar;
