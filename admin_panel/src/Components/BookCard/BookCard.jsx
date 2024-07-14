import React, { useContext } from 'react';
import './BookCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus ,faMinus} from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../Components/Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const BookCard = (props) => {
  const {URL, addToCart ,deleteBook,getBooksList} = useContext(StoreContext);

  const handleCart = (itemId) => {
    deleteBook(itemId);
    if (props.count > 0) {
      console.log(itemId);
      addToCart(itemId);
    }
  };

  const increaseCountHandler=async(id)=>{
    const response=await axios.post(URL+"/library/books/increaseCount",{id});
    if(response.data.success){
      toast.success(response.data.message);
      getBooksList();
    }else{
      toast.error(response.data.message);
    }
  }

  const decreaseCountHandler=async(id)=>{
    const response=await axios.post(URL+"/library/books/update-count",{id});
    if(response.data.success){
      toast.success(response.data.message);
      getBooksList();
    }else{
      toast.error(response.data.message);
    }
  }

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
        <h3 className="card-subtitle mb-2 ">Count: {props.count} <span><FontAwesomeIcon onClick={()=>increaseCountHandler(props.id)} className='button' icon={faPlus} /> <FontAwesomeIcon onClick={()=>decreaseCountHandler(props.id)} className='button' icon={faMinus} /></span> </h3>
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