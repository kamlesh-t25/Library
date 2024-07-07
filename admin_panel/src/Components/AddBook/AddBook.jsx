import React, { useState,useContext } from 'react';
import './AddBook.css';
import { StoreContext } from '../Context/StoreContext';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    description: '',
    author: '',
    genre: '',
    department: '',
    count: '',
    vendor: '',
    vendor_id: '',
    publisher: '',
    publisher_id: '',
    category:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const {addBook}=useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass bookData to addBook function
    addBook(bookData);
    // Clear form inputs after submission if needed
    setBookData({
      title: '',
      description: '',
      author: '',
      genre: '',
      department: '',
      count: '',
      vendor: '',
      vendor_id: '',
      publisher: '',
      publisher_id: '',
      category: ''
    });
  };

  return (
    <div className="form-container">
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={bookData.title} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input type="text" name="description" value={bookData.description} onChange={handleChange}  required/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Book Author:</label>
            <input type="text" name="author" value={bookData.author} onChange={handleChange}  required/>
          </div>
          <div className="form-group">
            <label>Genre:</label>
            <input type="text" name="genre" value={bookData.genre} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Department:</label>
            <input type="text" name="department" value={bookData.department} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Count:</label>
            <input type="text" name="count" value={bookData.count} onChange={handleChange}  required/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Vendor:</label>
            <input type="text" name="vendor" value={bookData.vendor} onChange={handleChange}  required/>
          </div>
          <div className="form-group">
            <label>Vendor Id:</label>
            <input type="text" name="vendor_id" value={bookData.vendor_id} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Publisher:</label>
            <input type="text" name="publisher" value={bookData.publisher} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Publisher ID:</label>
            <input type="text" name="publisher_id" value={bookData.publisher_id} onChange={handleChange}  required/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Category:</label>
            <input type="text" name="category" value={bookData.category} onChange={handleChange}  required/>
          </div>
        </div>
      <div className="form-buttons">
        <button type="button" className="cancel-button">Cancel</button>
        <button type="submit" className="submit-button">Add Book</button>
      </div>
    </form>
  </div>
  )
}

export default AddBook