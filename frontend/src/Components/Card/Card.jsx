import React from 'react'
import './Card.css';

const Card = () => {
    const clickHandel = function(){
        const dataofcart = props.data;
        // localStorage.setItem('bookData', JSON.stringify(dataofcart));
        console.log(dataofcart);
        console.log("Added to cart.");
            
    }
  return (
    <>
    <div className="card cardStyle p-3">
        <div className="card-body">
          <div className='firstElement text-center align-middle'><h5 className="card-title font-bold propName">props.data.title</h5></div>
          {/* <div className='secondElement text-center align-middle'><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div> */}
        </div>
        <h6 class="card-subtitle mb-2 text-body-secondary">props.data.author</h6>
        <h6 class="card-subtitle mb-2 mt-2 text-body-secondary">Availible: props.data.count copies</h6>
        <div className='thirdElement align-middle text-center'>
          <button onClick={ clickHandel } className="btn btn-outline-secondary justify-end items-end bottom-0">
            Add to cart
          </button>
        </div>
    </div>
    </>
  )
}

export default Card
