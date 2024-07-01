import React, { useContext } from 'react';
import './Orders.css';
import { StoreContext } from '../../Context/StoreContext';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'; 

const Orders = () => {
  const DUE_DATE = '2024-07-08';
  const { booksList, orders } = useContext(StoreContext);

  if (!orders || !orders.items || booksList.length === 0) {
    return( 
    <>
      <Navbar/>
      <div className=' text-center font-extrabold text-2xl'>No order placed yet...</div>;
    </> ); 
  }

  const orderedBooks = booksList.filter((book) =>
    orders.items.some((item) => item.bookId === book._id)
  );

  const calculateDaysRemaining = (dueDate) => {
    const currentDate = new Date();
    const returnDate = new Date(dueDate);
    const timeDiff = returnDate - currentDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };

  return (
    <div className='ordersContainer'>
      <Navbar />
      <div className="bookCard order-titles" style={{border: "2px solid black", background: "green"}}>
        <h2>Title</h2>
        <p>Author</p>
        <p>Status</p>
        <p>Return Reminder</p>
      </div>
      {
        orderedBooks.map((element, index) => {
          const orderItem = orders.items.find(item => item.bookId === element._id);
          // Setting the due date to the constant DUE_DATE
          orderItem.dueDate = DUE_DATE;
          const daysRemaining = calculateDaysRemaining(orderItem.dueDate);
          return (
            <div key={index} id={element._id} className={`bookCard ${orderItem.status === "Pending" ? "redOrder" : "greenOrder"}`} style={{border: orderItem.status === "Pending" ? "2px solid red" : "2px solid green"}}>
              <h2>{element.title}</h2>
              <p>{element.author}</p>
              <h2 className={orderItem.status === "Pending" ? "redColor" : "greenColor"}>{orderItem.status}</h2>
              <p>{daysRemaining > 0 ? `Return in ${daysRemaining} days` : "Return overdue"}</p>
              <button className='book-return-button'>Return</button>
            </div>
          );
        })
      }
      {/* <Footer /> */}
    </div>
  );
}

export default Orders;
