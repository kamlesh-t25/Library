import React, { useState } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeLink,setActiveLink]=useState("home");

  const navigate=useNavigate();
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const logoutHandler=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }

  const ordersClickHandler=()=>{
    navigate("/orders");
  }


  return (
  <div className='navbar-container' id='navbar-container'>
    <div className='navbar'>
      <div className="logo">
        {/* <a href="#" className='icon-size'><ion-icon name="book-outline"></ion-icon><span>eLibrary</span></a> */}
        <a href="#" className='icon-size' onClick={()=>navigate("/home")}><span className='logo-eLibrary'>eLibrary</span></a>

      </div>

      <div className="icons">
      <li className={activeLink=='home' ?"active":''} onClick={()=>handleLinkClick('home')}> <a href="#">Home</a> </li>
      {/* <li className={activeLink=='books' ?"active":''}  onClick={()=>handleLinkClick('books')}>Books</li> */}
      <li className={activeLink=='contact' ?"active":''}  onClick={()=>handleLinkClick('contact')}><a href='#footer'>Contact</a></li>
      <a href="#" className='icon-size' onClick={()=>navigate('/cart')}><ion-icon  name="cart-outline"></ion-icon></a>
      <div className="logout-popup-list">
        <a href="#" className='icon-size'><ion-icon  name="person-outline"></ion-icon></a>
        <div className="logout-orders">
          <p onClick={logoutHandler}>LogOut</p>
          <br />
          <p onClick={()=>navigate("/orders")}>Orders</p>
        </div>
      </div>
      </div>

  
    </div>
  </div>
  )
}
import './Navbar.css'

export default Navbar
