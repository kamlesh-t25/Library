import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const CartBookCard = (props) => {
  const {removeFromCart}=useContext(StoreContext);

  const handleRemoveCart=(itemId)=>{
    removeFromCart(itemId);
    console.log("remove");
  }
  const handleCartRequest=(itemId)=>{
    console.log("Request : -"+itemId);
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
