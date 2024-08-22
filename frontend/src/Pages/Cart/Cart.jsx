// This Page is Cart page we are also using cartBookCard here....Books selected by user from booksPage will displayed here...
// **To request a book or remove from cart click on the book**


import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import CartBookCard from '../../Components/CartBookCard/CartBookCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

const Cart = () => {
  const { booksList, cartData, removeFromCart, requestBook } = useContext(StoreContext);
  const [popupVisible, setPopupVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = (product) => {
    setActiveProduct(product);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setActiveProduct(null);
  };

  const handleRemoveCart = (itemId) => {
    removeFromCart(itemId);
    console.log("Removed from cart: " + itemId);
    handleClosePopup();
  };

  const handleCartRequest = async (itemId) => {
    console.log("Requesting book: " + itemId);
    requestBook(itemId);
    handleClosePopup();
  };

  return (
    <div className='cart-navbar'>
      <Navbar />
      <div className='cartContainer'>
        {booksList.map((element, index) => {
          if (cartData[element?._id] > 0) {
            return (
              <div className='parentDiv' key={index} onClick={() => handleProductClick(element)}>
                <CartBookCard id={element?._id} title={element?.title} description={element?.description} />
              </div>
            );
          }
        })}
        {popupVisible && activeProduct && (
          <div className='products-preview' style={{ display: 'flex' }}>
            <div className='preview active'>
              <FontAwesomeIcon className='fa-times' icon={faTimes} onClick={handleClosePopup} />
              <h3>{activeProduct.title}</h3>
              <p>{activeProduct.description}</p>
              <div className='buttons'>
                <button onClick={() => handleRemoveCart(activeProduct._id)} className='buy'>Remove from cart</button>
                <button onClick={() => handleCartRequest(activeProduct._id)} className='cart'>Request book</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
