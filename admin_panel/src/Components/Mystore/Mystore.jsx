import React from 'react'
import './Mystore.css'
const Mystore = () => {
  return (
    <div className="form-container">
    <form className="form-content">
      <div className="form-row">
        <div className="form-group">
          <label>Book Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input type="text" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Book Count:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>SubCategory:</label>
          <input type="text" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Author Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Publisher:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Publisher ID:</label>
          <input type="text" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Vendor:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Vendor Id:</label>
          <input type="text" />
        </div>
      </div>
      <div className="form-buttons">
        <button type="button" className="cancel-button">Cancel</button>
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Mystore
