// We are using this on CartPage 

import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';

const CartBookCard = (props) => {
  console.log(props);
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
    // <div className='bookCard'>
    //   <h2>{props.title}</h2>
    //   <div>
    //   <button onClick={()=>handleRemoveCart(props.id)}>Remove From Cart</button>
    //   <button onClick={()=>handleCartRequest(props.id)}>Request</button>

    //   </div>
    // </div>
    <>
          <div className="card cardStyle p-3">
        <div className="card-body">
          <div className='firstElement text-center align-middle'><h5 className="card-title font-bold propName">{props.title}</h5></div>
          <div className='secondElement text-center align-middle'><p className="card-text">{props.description}</p></div>
        </div>
        {/* <h6>Author: {props.author}</h6> */}
        {/* <h6 class="card-subtitle mb-2 mt-2 text-body-secondary">Availible: {props.data.count} copies</h6> */}

    </div>
    </>
  )
}

export default CartBookCard
