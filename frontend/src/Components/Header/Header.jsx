import React, { useContext } from 'react'
import './Header.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';


const Header = () => {
  const {userName}=useContext(StoreContext);
  return (
    <div className='header'>
      {/* <div className="header-content">
        <h2 className='heading'>Welcome</h2>
        <p className='content'>Hello {userName ? userName : "Loading..."}</p>
      </div>

      <form action="/">
        <div className="search">
          <input type="search" name="" id="search-space" placeholder='search here..' />
          <span className='search-icons'><ion-icon name="search-outline"></ion-icon></span>
        </div> */}
      {/* </form> */}
        <div className="header-text">
            <h2>eLibrary</h2>
            <h5>Hello {userName ? userName : "Loading..."}</h5>
        </div>
        <div className="header-image">
          <img src={assets.header_image} alt="" />
        </div>
      
    </div>
  )
}

export default Header
