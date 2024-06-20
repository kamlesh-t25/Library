import React, { useContext, useState } from 'react';
import './BooksPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import BookDisplay from '../../Components/BookDisplay/BookDisplay';
import { useNavigate, useParams } from 'react-router-dom';
import { Engineering } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import BookCard from '../../Components/BookCard/BookCard';

const BooksPage = () => {
  // const [subCategory,setSubCategory]=useState('');
  const {URL,subCategory,setSubCategory,booksList} =useContext(StoreContext);//sub-category=department
  const {categoryName}=useParams();
  const navigate=useNavigate();



  return (
  <div className="books-display">
    <button className='home-to-button' onClick={()=>{navigate('/home')}}>Back To Home</button>
    <div className='bookPage-container'>
      {Engineering.map((element,index)=>{
        return (
          <div key={index} className={`subCategory-container ${subCategory==element.department_name ? "active-sub":""}`} onClick={()=>setSubCategory(prev=>prev==element.department_name?"":element.department_name)}>
            <h2>{element.department_name}</h2>
          </div>
        )
      })}
    </div>
<br />
<hr />
<br />

    <div className="booksCard-container">
      {booksList.filter(book => book.department === subCategory || subCategory === "").map((element, index) => (
          <BookCard key={index} id={element._id} title={element.title} />
        ))}
    </div>
  </div>
  )
}

export default BooksPage
