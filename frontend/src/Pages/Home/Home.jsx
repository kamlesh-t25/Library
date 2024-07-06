import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header.jsx'
import ExploreCategory from '../../Components/ExploreCategory/ExploreCategory.jsx'
import { category_list } from '../../assets/assets.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import BookDisplay from '../../Components/BookDisplay/BookDisplay.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Card from '../../Components/Card/Card.jsx';
const Home = () => {
  const [category,setCategory]=useState("All");
  document.documentElement.style.fontSize = '';
  document.documentElement.style.overflowX = '';
  // useEffect(() => {
  //     window.location.reload();
  // }, []);



  // useEffect hook to reload the page on the first visit
  useEffect(() => {
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
      {/* <BookDisplay category={category}/> */}
      {/* <Card/> */}
      {/* <Card/> */}
      {/* <Footer/> */}
    </div>
  </div>
  <Footer/>
</div>
  )
}

export default Home
