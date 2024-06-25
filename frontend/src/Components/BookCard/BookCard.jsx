import React, { useContext } from 'react'
import './BookCard.css'
import { StoreContext } from '../../Context/StoreContext'

const BookCard = (props) => {
  const {addToCart}=useContext(StoreContext);


    const handleCart=(itemId)=>{
        console.log(itemId);
      addToCart(itemId);
    }

  return (
    <div className='bookCard'>
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      <button onClick={()=>handleCart(props.id)}>Add to Cart</button>
    </div>
  )
}

export default BookCard
