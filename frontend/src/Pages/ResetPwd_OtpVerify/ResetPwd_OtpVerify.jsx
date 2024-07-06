import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './SendOtp.css';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const ResetPwd_OtpVerify = ({URL}) => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const location=useLocation();

    const {email}=location.state;

    const handleSubmit = async (e) => {
        console.log("clicked");
        e.preventDefault();
        // Add your form submission logic here, e.g., sending a request to an API
        const response=await axios.post(URL+"/library/user/resetPwd_verifyOTP",{email,otp});
        if(response.data.success){
            navigate('/setNewPassword',{state:{email}});
            toast.success(response.data.message);
        }else{
            console.log(response.data.message);
            toast.error(response.data.message);
        }
    };

    return (
        <div className="wrapper">
            <div className="container main">
                <div className="row">
                    <div className="col-md-6 side-image">
                        {/* Image can be added as a background in the styles or here as an img tag */}
                        {/* <img src="../assets/Icon.png" alt=""> */}
                        {/* <div className="text">
                            <p>Join the community of developers <i>- ludiflex</i></p>
                        </div> */}
                    </div>
                    <div className="col-md-6 right">
                        <div className="input-box">
                            <form onSubmit={handleSubmit}>
                                <header>Email Verification</header>
                                <div className="input-field">
                                    <input 
                                        type="number" 
                                        className="input" 
                                        id="pass" 
                                        required 
                                        value={otp} 
                                        onChange={(e) => setOtp(e.target.value)} 
                                    />
                                    <label htmlFor="pass">Enter OTP</label>
                                </div>
                                <div className="input-field">
                                    <input type="submit" className="submit" value="Verify Email" />
                                </div>
                                <div className="signin">
                                    <span>Already have an account? <a href="/">Sign In here</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPwd_OtpVerify;

