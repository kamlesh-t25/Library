import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      {/* <div className="footer-img">
        <img src={assets.footer_image} alt="" />
      </div> */}
      <div className="footer-content">
        <div className="f-footer">
            <img src={assets.iitdh_logo} alt="" />
            <p>IIT-Dharwad <br />Karnataka</p>

        </div>
        <div className="s-footer">
            <p>aaa</p>
        </div>
        <div className="t-footer">
            <p>aaaaaaaa</p>
        </div>
      </div>
    </div>
  )
}
import './Footer.css';
import { assets } from '../../assets/assets';

export default Footer
