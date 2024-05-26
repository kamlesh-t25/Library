import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [activeLink,setActiveLink]=useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };


  return (
  <div className='navbar+'>
    <div className='navbar'>
      <div className="logo">
        <a href="#" className='icon-size'><ion-icon name="book-outline"></ion-icon><span>eLibrary</span></a>
      </div>

      {/* <form action="" className='search-icon'>
        <input type="search"  name="search-space" placeholder='search here...' id="search-space" />
        <label className='icon-size' htmlFor="search-space"><ion-icon name="search-outline"></ion-icon></label>
      </form> */}

      <div className="icons">
      {/* <form action="" className='search-icon'>
        <input type="search"  name="search-space" placeholder='search here...' id="search-space" />
        <label className='icon-size' htmlFor="search-space"><ion-icon name="search-outline"></ion-icon></label>
      </form> */}

    {/* <div className="links"> */}
      <li className={activeLink=='home' ?"active":''} onClick={()=>handleLinkClick('home')}>Home</li>
      <li className={activeLink=='books' ?"active":''}  onClick={()=>handleLinkClick('books')}>Books</li>
      <li className={activeLink=='contact' ?"active":''}  onClick={()=>handleLinkClick('contact')}>Contact</li>
    {/* </div> */}
      <a href="#" className='icon-size'><ion-icon  name="cart-outline"></ion-icon></a>
      <a href="#" className='icon-size'><ion-icon  name="person-outline"></ion-icon></a>
      </div>
    </div>
    {/* <div className="links">
      <li className={activeLink=='home' ?"active":''} onClick={()=>handleLinkClick('home')}><a href="javascript:void(0)">Home</a></li>
      <li className={activeLink=='books' ?"active":''}  onClick={()=>handleLinkClick('books')}><a href="javascript:void(0)">Books</a></li>
      <li className={activeLink=='contact' ?"active":''}  onClick={()=>handleLinkClick('contact')}><a href="javascript:void(0)">Contact</a></li>
    </div> */}
  </div>
  )
}
import './Navbar.css'

export default Navbar
