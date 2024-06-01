import React, { useContext } from 'react'
import './ExploreCategory.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreCategory = ({category_list,category,setCategory}) => {
    // const {category,setCategory}=useContext(StoreContext);
  return (
<div className="category-container">
    <div className="category-description">
        <h2>Select category</h2>
    </div>
    <div className='category-list'>
      {
        category_list.map((element,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev==element.category_name?"All":element.category_name)} className="category-item" key={index}>
                    <img className={category==element.category_name?"active_category":""} src={element.category_image} alt="" />
                    <p>{element.category_name}</p>
                </div>
            )
        })
      }
    </div>
</div>
  )
}

export default ExploreCategory
