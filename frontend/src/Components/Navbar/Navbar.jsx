import React, { useContext, useState } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeLink,setActiveLink]=useState("home");
  const {setUserName,setBooksList,setCartData,setOrders}=useContext(StoreContext);

  const navigate=useNavigate();
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const logoutHandler=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('reloaded');
    setUserName(""); // Reset userName when token is cleared (logout)
            setBooksList([]); // Reset booksList when token is cleared (logout)
            setCartData({}); // Reset cartData when token is cleared (logout)
            setOrders([]);
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
        <a className='icon-size' onClick={()=>navigate("/home")}><span className='logo-eLibrary'>eLibrary</span></a>

      </div>

      <div className="icons">
      {/* <li className={activeLink=='home' ?"active":''} onClick={()=>handleLinkClick('home')}> <a onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a> </li> */}
      {/* <li className={activeLink=='books' ?"active":''}  onClick={()=>handleLinkClick('books')}>Books</li> */}
      <li  onClick={()=>handleLinkClick('contact')}><a href='#footer'>Contact</a></li>
      <a className='icon-size' onClick={()=>navigate('/cart')}><ion-icon  name="cart"></ion-icon></a>
      {/* //Order icons created by Freepik - Flaticon */}
      <a href="" className='icon-size' onClick={()=>navigate("/orders")}><img className='orders-image-navbar' src={assets.orders_image} alt="" /></a>
      <div className="logout-popup-list">
        <a href="#" className='icon-size'><ion-icon  name="person"></ion-icon></a>
        <div className="logout-orders">
          <p onClick={()=>navigate("/user")}>My Profile</p>
          <br />
          <p onClick={logoutHandler}>LogOut</p>
        </div>
      </div>
      </div>

  
    </div>
  </div>
  )
}
import './Navbar.css'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

export default Navbar
