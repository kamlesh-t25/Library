import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import CartBookCard from '../../Components/CartBookCard/CartBookCard.jsx';
import './Cart.css';

const Cart = () => {
  const {booksList,cartData,getCartData}=useContext(StoreContext);
  // useEffect(()=>{
  //   getCartData();
  //   console.log("CartData :-",cartData);
  // },[])
  return (
    <div className='cartContainer'>
      {booksList.map((element,index)=>{
        if(cartData[element._id] > 0){
          return (<CartBookCard id={element._id} key={index} title={element.title} />)
        }
      })}
    </div>
  )
}

export default Cart
