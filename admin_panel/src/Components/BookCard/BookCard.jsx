import React, { useContext } from 'react';
import './BookCard.css';
import { StoreContext } from '../../Components/Context/StoreContext';

const BookCard = (props) => {
  const { addToCart ,deleteBook} = useContext(StoreContext);

  const handleCart = (itemId) => {
    deleteBook(itemId);
    if (props.count > 0) {
      console.log(itemId);
      addToCart(itemId);
    }
  };

  return (
    <>
      <div
        className={`card cardStyle p-3 bookCard ${props.count === 0 ? 'outOfStock' : ''}`}
        style={{ pointerEvents: props.count === 0 ? 'none' : 'auto' }}
      >
        <div className="card-body">
          <div className="firstElement text-center align-middle">
            <h5 className="card-title font-bold propName">{props.title}</h5>
          </div>
          <br />
          <div className="secondElement text-center align-middle">
            <p className="card-text text-green-600">{props.description}</p>
          </div>
        </div>
        <h4 className="card-subtitle mb-2 ">Author: {props.author}</h4>
        <h4 className="card-subtitle mb-2 ">Copies Available: {props.count}</h4>
        <div className="thirdElement align-middle text-center">
          <button
            onClick={() => handleCart(props.id)}
            className="btn btn-outline-secondary justify-end items-end bottom-0 delete-book-button"
            disabled={props.count === 0}
          >
            Delete Book
          </button>
        </div>
      </div>
    </>
  );
};

export default BookCard;