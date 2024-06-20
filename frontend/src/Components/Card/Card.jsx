import React from 'react'
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const navigate=useNavigate();
    const clickHandel = function(){
        const categoryName = props.name;
        // localStorage.setItem('bookData', JSON.stringify(dataofcart));
        // console.log(dataofcart);
        // console.log("Added to cart.");
        navigate(`/home/${categoryName}`);
            
    }
  return (
    <>
    <div className="card cardStyle p-3">
        <div className="card-body">
          <div className='firstElement text-center align-middle'><h5 className="card-title font-bold propName">{props.name}</h5></div>
          {/* <div className='secondElement text-center align-middle'><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div> */}
        </div>
        {/* <h6 class="card-subtitle mb-2 text-body-secondary">props.data.author</h6> */}
        {/* <h6 class="card-subtitle mb-2 mt-2 text-body-secondary">Availible: props.data.count copies</h6> */}
        <div className='thirdElement align-middle text-center'>
          <button onClick={ clickHandel } className="btn btn-outline-secondary justify-end items-end bottom-0">
            Explore Category
          </button>
        </div>
    </div>
    </>
  )
}

export default Card
