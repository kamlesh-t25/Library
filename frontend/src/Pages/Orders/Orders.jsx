import React, { useContext } from 'react';
import './Orders.css';
import { StoreContext } from '../../Context/StoreContext';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'; 

const Orders = () => {
  const currentDate = new Date();
  const { booksList, orders } = useContext(StoreContext);

  const calculateDaysRemaining = (updatedAt) => {
    const updatedAtDate = new Date(updatedAt);
    const returnDate = new Date(updatedAtDate);
    returnDate.setDate(updatedAtDate.getDate() + 2); // Set return date to 1 days after updatedAt

    const currentDate = new Date();
    const timeDiff = returnDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysRemaining;
  };

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

  return (
  <>  
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
          const daysRemaining = calculateDaysRemaining(orderItem.updatedAt);
          return (
            <div key={index} id={element._id} className={`bookCard ${orderItem.status === "Pending" ? "redOrder" : "greenOrder"}`} style={{border: orderItem.status === "Pending" ? "2px solid red" : "2px solid green"}}>
              <h2>{element.title}</h2>
              <p className='orders-authorName'>{element.author}</p>
              <h2 className={orderItem.status === "Pending" ? "redColor" : "greenColor"}>{orderItem.status}</h2>
              {orderItem.status == "Approve" ? <h2 style={{color:daysRemaining > 0? "":"red"}}>{daysRemaining > 0 ? `Return in ${daysRemaining} days` : "Return overdue"}</h2> 
              : <h2>Loading...</h2> }
              {/* <p>{daysRemaining > 0 ? `Return in ${daysRemaining} days` : "Return overdue"}</p> */}
              <button className='book-return-button'>Return</button>
            </div>
          );
        })
      }
    </div>
    <Footer />
  </>
  );
}

export default Orders;
