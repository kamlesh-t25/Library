import React, { useContext, useEffect, useState } from 'react';
import './BooksPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import BookDisplay from '../../Components/BookDisplay/BookDisplay';
import { useNavigate, useParams } from 'react-router-dom';
import { Engineering } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import BookCard from '../../Components/BookCard/BookCard';
import SampleCategory from '../../Components/FilterCard/SampleCategory';
import Footer from '../../Components/Footer/Footer';

const BooksPage = () => {
  // const [subCategory,setSubCategory]=useState('');
  const {URL,subCategory,setSubCategory,booksList} =useContext(StoreContext);//sub-category=department
  const {categoryName}=useParams();
  const navigate=useNavigate();
  useEffect(() => {
    document.documentElement.style.fontSize = '0.8rem';
    document.documentElement.style.overflowX = '';
  }, []);
  const handelClick = ()=>{
      navigate('/home');
      document.documentElement.style.fontSize = '';
      document.documentElement.style.overflowX = '';
  }
  return (
  <div className="books-display">
    <Navbar/>
    {/* <button className='home-to-button' onClick={handelClick}>Back To Home</button> */}
    {/* <div className='bookPage-container'>
      {Engineering.map((element,index)=>{
        return (
          <div key={index} className={subCategory-container ${subCategory==element.department_name ? "active-sub":""}} onClick={()=>setSubCategory(prev=>prev==element.department_name?"":element.department_name)}>
            <h2>{element.department_name}</h2>
          </div>
        )
      })}
    </div> */}
    <SampleCategory category={categoryName} subCategory={subCategory} setSubCategory={setSubCategory}  />

<br />
<hr />
<br />

    <div className="booksCard-container">
      {booksList.filter(book => (book.department === subCategory || subCategory === "") && (book.category==categoryName)).map((element, index) => (
          <BookCard key={index} id={element._id} title={element.title} author={element.author} description={element.description} count={element.count} />
        ))}
    </div>
    <Footer/>
  </div>
  )
}

export default BooksPage