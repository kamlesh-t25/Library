import React from 'react';
import './SampleCategory.css';

const engineeringCategories = [
  {
    name: "Chemical Engineering",
    imgSrc: "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A842PA3861PT28D1039953301W7926H10000/views/1,width=800,height=800,appearanceId=842,backgroundColor=F2F2F2/chemical-engineering-logo-chemistry-engineer-sticker.jpg"
  },
  {
    name: "Computer Science",
    imgSrc: "https://www.shutterstock.com/image-vector/computer-science-icon-outline-thin-600nw-1613513884.jpg"
  },
  {
    name: "Electrical Engineering",
    imgSrc: "https://seeklogo.com/images/T/trust-me-i-am-electrical-engineer-logo-DBF878EEBA-seeklogo.com.png"
  },
  {
    name: "Engineering Physics",
    imgSrc: "https://pbs.twimg.com/profile_images/1112954774478090240/GA6CTscP_400x400.png"
  },
  {
    name: "Mechanical Engineering",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hic5MYPQCRyuaCrIA_RV_G8kLFHqzWUo8A&s"
  },
  {
    name: "Civil Engineering",
    imgSrc: "https://cdn.vectorstock.com/i/500p/08/15/worker-icon-stylized-logo-construction-vector-30080815.jpg"
  }
];

const SampleCategory = ({subCategory, setSubCategory}) => {
  return (
    <div className="container">
      <div className="products-container">
        {engineeringCategories.map((category, index) => (
          <div 
            key={index} 
            className={`product ${subCategory === category.name ? "active-sub" : ""}`} 
            onClick={() => setSubCategory(prev => prev === category.name ? "" : category.name)}
          >
            <img src={category.imgSrc} alt={category.name}/>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SampleCategory;
