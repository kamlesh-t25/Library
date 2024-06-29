import React, { useContext, useState,useEffect } from 'react'
import './Footer.css';

const Footer = () => {
  const {weatherData}=useContext(StoreContext);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    let hour = date.getHours();
    let minute = date.getMinutes();
    let period = hour >= 12 ? 'pm' : 'am';

    // Convert hour from 24-hour to 12-hour format
    hour = hour % 12 || 12;
    
    // Format minutes to have two digits
    minute = minute < 10 ? '0' + minute : minute;

    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const dayOfMonth = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();

    return `${dayOfWeek} ${hour}:${minute}${period}, ${dayOfMonth}th ${month},${year}`;
  };




  return (
    <div className='footer-container' id='footer'>
      {/* <div className="footer-img">
        <img src={assets.footer_image} alt="" />
      </div> */}
      <div className="footer-content">
        <div className="f-footer">
            <img src={assets.iitdh_logo} alt="" />
            <p>Indian Institute of Technology Dharwad <br />
            CHIKKAMALLIGAWAD DHARWAD - 580007 , KARNATAKA</p>
            <p><i className="bi bi-telephone-fill"> 0836 221 2839</i></p>
            <p><i className="bi bi-envelope"> <a href="mailto:pro@iitdh.ac.in" className='email-link'> pro@iitdh.ac.in</a></i></p>
            <p><i className="bi bi-globe-asia-australia"><a href="https://www.iitdh.ac.in" className='website-link' target='_blank'> www.iitdh.ac.in</a></i></p>
        </div>
        {/* <div className="s-footer">
        <p>aaaaaaaa</p>
        </div> */}
        <div className="t-footer">
          <div className="weather-icon-location">
            <img className='weather-icon' src={weatherData.icon} alt="" />
            <span className='weather-location'>{weatherData.location}</span>
          </div>
          <p>{formatTime(currentDateTime)}</p>
          <p><i className="bi bi-thermometer-half"></i> Temp :{weatherData.temperature}</p>
          <p><i className="bi bi-water"></i> Humidity : {weatherData.humidity}%</p>
          <p><i className="bi bi-wind"></i> Wind : {weatherData.windSpeed} Km/h</p>
          

        </div>
      </div>
    </div>
  )
}
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

export default Footer
