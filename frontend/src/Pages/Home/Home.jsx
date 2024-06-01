import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header.jsx'
import ExploreCategory from '../../Components/ExploreCategory/ExploreCategory.jsx'
import { category_list } from '../../assets/assets.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import BookDisplay from '../../Components/BookDisplay/BookDisplay.jsx';

const Home = () => {
  const [category,setCategory]=useState("All");

  return (
    <div className='headers'>
      
      <Header/>
      <hr />
      <ExploreCategory category_list={category_list} category={category} setCategory={setCategory} />
      <BookDisplay category={category}/>

      {/* <Footer/> */}
    </div>
  )
}

export default Home
