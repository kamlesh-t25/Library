import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Password_reset = ({URL}) => {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const handelSubmit = async function(e){
        e.preventDefault();
        const response=await axios.post(URL+"/library/user/resetPwd_sendOTP",{email});
        if(response.data.success){
            navigate('/resetPwd_otpVerify',{state:{email}});
            toast.success(response.data.message);
        }else{
            navigate('/forgot_password');
            toast.error(response.data.message);
        }
    }
    return (
<div className="wrapper">
            <div className="container main">
                <div className="row">
                <div className="col-md-6 side-image" style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1605116959031-6e2d13a2ee56?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '10px 0 0 10px',
                        position: 'relative'
                    }}>
                    </div>
                    <div className="col-md-6 right">
                        <div className="input-box">
                            <form onSubmit={ handelSubmit }>
                                <header>Reset Password</header>
                                {/* <div className="input-field">
                                    <input type="text" className="input" id="name" required autoComplete="off" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                    <label htmlFor="name">Name</label>
                                </div> */}
                                <div className="input-field">
                                    <input type="email" className="input" id="email" required autoComplete="off" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="input-field">
                                    <input type="submit" className="submit" value="Send OTP" />
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
}

export default Password_reset
