import React, { useState } from 'react';
import './AddBook.css';

const AddBook = ({ addBook }) => {
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
            <input type="text" name="title" value={bookData.title} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input type="text" name="category" value={bookData.category} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Book Count:</label>
            <input type="text" name="count" value={bookData.count} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Genre:</label>
            <input type="text" name="genre" value={bookData.genre} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Department:</label>
            <input type="text" name="department" value={bookData.department} onChange={handleChange} />
          </div>
          <div className="form-group">
            <div className="form-group">
            <label>Vendor ID:</label>
            <input type="text" name="vendor_id" value={bookData.vendor_id} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Author Name:</label>
            <input type="text" name="author" value={bookData.author} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Publisher:</label>
            <input type="text" name="publisher" value={bookData.publisher} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Publisher ID:</label>
            <input type="text" name="publisher_id" value={bookData.publisher_id} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Vendor:</label>
            <input type="text" name="vendor" value={bookData.vendor} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Description:</label>
            <input type="text" name="description" value={bookData.description} onChange={handleChange} />
          </div>
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="submit-button">Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook