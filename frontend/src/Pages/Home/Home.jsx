import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header.jsx'
import ExploreCategory from '../../Components/ExploreCategory/ExploreCategory.jsx'
import Footer from '../../Components/Footer/Footer.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Card from '../../Components/Card/Card.jsx';
import { StoreContext } from '../../Context/StoreContext.jsx';
const Home = () => {
  const [category,setCategory]=useState("All");
  document.documentElement.style.fontSize = '';
  document.documentElement.style.overflowX = '';
  
  const {category_list}=useContext(StoreContext);

  // useEffect hook to reload the page on the first visit
  useEffect(() => {
    console.log("Home :",category_list);
    // Check if the page has been reloaded before
    if (!localStorage.getItem('reloaded')) {
      // If not, reload the page and set the flag in local storage
      localStorage.setItem('reloaded', 'true');
      window.location.reload();
    }
  }, []);
  
  return (
<div className="home-home">
  
  <div className="home-container">
    <div className='headers'>
      <Navbar/>
      <Header/>
      <hr />
      <ExploreCategory category_list={category_list} category={category} setCategory={setCategory} />
    </div>
  </div>
  <Footer/>
</div>
  )
}

export default Home
