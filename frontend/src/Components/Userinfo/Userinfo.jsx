import React, { useContext } from 'react';
import './Userinfo.css';
import Footer from '../Footer/Footer.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Header from '../Header/Header';
import { StoreContext } from '../../Context/StoreContext.jsx';
import { useNavigate } from 'react-router-dom';

const Userinfo = () => {
    const user = {
        avatar: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
    };

    const {userName,userEmail}=useContext(StoreContext);
    const navigate=useNavigate();
    return (
        <div>
            {/* <Navbar/> */}
            <div className='mainDivision'>

            <div className="user-profile-card">
            <div className="card-header"></div>
            <div className="card-body">
                <img src={user.avatar} alt="User Avatar" className="user-avatar" />
                <h1 className="user-name">{userName}</h1>
                <h6>EMAIL : {userEmail}</h6>
                <p className="user-description">An avid reader and book enthusiast, exploring a wide range of genres in the eLibrary.</p>
                {/* <p>Number of books issued so far : xxx</p> */}
                {/* <p>Number of books in cart so far : xxx</p> */}
                <button className="contact-button" onClick={()=>navigate("/home")}>Back to Home</button>
            </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default Userinfo;
