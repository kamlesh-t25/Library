import React, { useContext } from 'react';
import './Orders.css';
import { StoreContext } from '../../Context/StoreContext';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Orders = () => {
  const {booksList,orders}=useContext(StoreContext);

  if (!orders || !orders.items || booksList.length === 0) {
    return <div>Loading...</div>;
  }

  const orderedBooks = booksList.filter((book) =>
    orders.items.some((item) => item.bookId === book._id)
  );



  return (
    <div className='ordersContainer'>
      <Navbar/>
      <div className="bookCard order-titles" style={{border:"2px solid black"},{background:"green"}}>
        <h2>Title</h2>
        <p>Author</p>
        <button>Status</button>
      </div>
      {
        orderedBooks.map((element,index)=>{
          const orderItem = orders.items.find(item => item.bookId === element._id);
          return (
          <div key={index} id={element._id} className='bookCard'  style={{border: orderItem.status=="Pending" ? "2px solid red": "2px solid green"}}>
              <h2>{element.title}</h2>
              <p>{element.author}</p>
              <button className={orderItem.status=="Pending" ? "redColor" : "greenColor"}>{orderItem.status}</button>
              <button className='book-return-button'>Return</button>
          </div>
          )
        })
      }
      {/* <Footer/> */}
    </div>
  )
}


export default Orders
