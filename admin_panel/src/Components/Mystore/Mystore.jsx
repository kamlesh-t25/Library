import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../Context/StoreContext';
import BookCard from '../BookCard/BookCard';
import './Mystore.css';

const Mystore = () => {
  const { URL, booksList } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(booksList);

  useEffect(() => {
    document.documentElement.style.fontSize = '0.8rem';
    document.documentElement.style.overflowX = '';
    console.log('Books List:', booksList);
  }, [booksList]);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredBooks(booksList);
    } else {
      const filtered = booksList.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [searchQuery, booksList]);

  return (
    <>
      <div className='flex justify-center align-middle INPUT'>
        <input 
          type='text' 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder='Search book by title...'
        />
      </div>
      <div className="books-display">
        <div className="booksCard-container">
          {filteredBooks.map((element, index) => (
            <BookCard 
              key={index} 
              id={element._id} 
              title={element.title} 
              author={element.author} 
              description={element.description} 
              count={element.count} 
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Mystore;