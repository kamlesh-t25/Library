// This is the component that we are using on home page to display category and mapping books according to them

import React from 'react';
import './SampleCategory.css';


const SampleCategory = ({category,subCategory, setSubCategory,departments}) => {
  return (
    <div className="container">
      <div className="products-container">
        {departments.map((category, index) => (
          <div 
            key={index} 
            className={`product ${subCategory === category.name ? "active-sub" : ""}`} 
            onClick={() => setSubCategory(prev => prev === category.name ? "" : category.name)}
          >
            <img src={category.image_url} alt={category.name}/>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SampleCategory;
