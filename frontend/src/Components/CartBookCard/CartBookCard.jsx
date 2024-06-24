import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';

const CartBookCard = (props) => {
  const {removeFromCart,URL,requestBook}=useContext(StoreContext);

  const handleRemoveCart=(itemId)=>{
    removeFromCart(itemId);
    console.log("remove");
  }
  const handleCartRequest=async(itemId)=>{
    console.log("Request : -"+itemId);
    requestBook(itemId);
  }

  return (
    <div className='bookCard'>
      <h2>{props.title}</h2>
      <div>
      <button onClick={()=>handleRemoveCart(props.id)}>Remove From Cart</button>
      <button onClick={()=>handleCartRequest(props.id)}>Request</button>

      </div>
    </div>
  )
}

export default CartBookCard
