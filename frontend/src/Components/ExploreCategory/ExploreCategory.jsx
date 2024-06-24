import React, { useContext } from 'react'
import './ExploreCategory.css';
import { StoreContext } from '../../Context/StoreContext';
import Card from '../Card/Card';

const ExploreCategory = ({category_list,category,setCategory}) => {
    // const {category,setCategory}=useContext(StoreContext);
  return (
<div className="explose-category-container">
    <div className="category-description">
        <h2><b><u>Select category</u></b> : -</h2>
        <div className="card-display-section">
          {
            category_list.map((element,index)=>{
              return (<Card key={index} name={element.category_name} />)
            })
          }

        </div>

    </div>
    
</div>
  )
}

export default ExploreCategory;