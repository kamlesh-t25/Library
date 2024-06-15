import React, { useContext } from 'react'
import './ExploreCategory.css';
import { StoreContext } from '../../Context/StoreContext';
import Card from '../Card/Card';

const ExploreCategory = ({category_list,category,setCategory}) => {
    // const {category,setCategory}=useContext(StoreContext);
  return (
<div className="explose-category-container">
    <div className="category-description">
        <h2>Select category</h2>
        <div className="card-display-section">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>

    </div>
    
</div>
  )
}

export default ExploreCategory;