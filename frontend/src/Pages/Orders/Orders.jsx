import React, { useContext } from 'react';
import './Orders.css';
import { StoreContext } from '../../Context/StoreContext';

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
      {
        orderedBooks.map((element,index)=>{
          const orderItem = orders.items.find(item => item.bookId === element._id);
          return (
          <div key={index} id={element._id} className='bookCard'>
              <h2>{element.title}</h2>
            <div>
            {/* <button onClick={()=>handleRemoveCart(element._id)}>Cancel Order</button> */}
            <button>{orderItem.status}</button>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}


export default Orders
