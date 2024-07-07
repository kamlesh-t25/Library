//This component is being used in homePage section 

import React, { useContext, useEffect } from 'react'
import './ExploreCategory.css';
import { StoreContext } from '../../Context/StoreContext';
import Card from '../Card/Card';

const ExploreCategory = ({category_list,category,setCategory}) => {
    // const {category,setCategory}=useContext(StoreContext);
  return (
<div className="explose-category-container">
    <div className="category-description">
        <h1 className=' text-center text-3xl font-extrabold my-10'>Select Category</h1>
        <div className="card-display-section">
          {
            category_list.map((element,index)=>{
              return (<Card key={index} name={element} />)
            })
          }

        </div>

    </div>
    
</div>
  )
}

export default ExploreCategory;