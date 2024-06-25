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
    // <div className='bookCard'>
    //   <h2>{props.title}</h2>
    //   <button onClick={()=>handleCart(props.id)}>Add to Cart</button>
    // </div>
    <>
      <div className="card cardStyle p-3 bookCard">
        <div className="card-body">
          <div className='firstElement text-center align-middle'><h5 className="card-title font-bold propName">{props.title}</h5></div> 
          <br></br>
          <div className='secondElement text-center align-middle'><p className="card-text text-green-600">{props.description}</p></div>
        </div>
        <h6 class="card-subtitle mb-2 text-body-secondary">Author: {props.author}</h6>
        {/* <h6 class="card-subtitle mb-2 mt-2 text-body-secondary">Availible: {props.count} copies</h6> */}
        <div className='thirdElement align-middle text-center'>
          <button onClick={()=>handleCart(props.id)} className="btn btn-outline-secondary justify-end items-end bottom-0">
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}

export default BookCard
