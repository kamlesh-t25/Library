//This is the page where user can select books ,search books by title and department name .....
//User can only add one copy of each book in cart..if he adds more he will get error

import React, { useContext, useEffect, useState } from 'react';
import './BooksPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import BookCard from '../../Components/BookCard/BookCard';
import SampleCategory from '../../Components/FilterCard/SampleCategory';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

const BooksPage = () => {
  // const [subCategory,setSubCategory]=useState('');
  const {URL,subCategory,setSubCategory,booksList} =useContext(StoreContext);//sub-category=department
  const {categoryName}=useParams();
  const [searchBookInput,setSearchInput]=useState("");

  const [departments,setDepartments]=useState([]);

  useEffect(() => {
    const hasRefreshed = sessionStorage.getItem('hasRefreshed');

    if (!hasRefreshed || hasRefreshed !== categoryName) {
      sessionStorage.setItem('hasRefreshed', categoryName);
      window.location.reload();
    }
  }, [categoryName]);

  useEffect(()=>{
    const getDepartmentsName=async()=>{
      const response=await axios.get(URL+`/library/${categoryName}`);
      if(response.data.success){
        console.log("Departments : ",response.data);
        setDepartments(response.data.data);
      }else{
        toast.error(response.data.message);
      }
    }

    getDepartmentsName();
  },[categoryName])



  const navigate=useNavigate();
  useEffect(() => {
    document.documentElement.style.fontSize = '0.8rem';
    document.documentElement.style.overflowX = '';
  }, []);
  return (
  <div className="books-display">
    <Navbar/>
    <SampleCategory departments={departments} category={categoryName} subCategory={subCategory} setSubCategory={setSubCategory}  />

<br />
<hr />
    <div className="book-search-input">
      <input type="text" value={searchBookInput} onChange={(e)=>setSearchInput(e.target.value)} name="searchBook" id="searchBook" placeholder='Search book by title....' />
    </div>
<br />

    <div className="booksCard-container">
      {booksList.filter(book => (book.department === subCategory || subCategory === "") && (book.category==categoryName) && (book.title.toLowerCase().includes(searchBookInput.toLowerCase())) ).map((element, index) => (
          <BookCard key={index} id={element._id} title={element.title} author={element.author} description={element.description} count={element.count} />
        ))}
    </div>
    {/* <Footer/> */}
  </div>
  )
}

export default BooksPage