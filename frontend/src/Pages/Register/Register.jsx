import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Register = ({URL}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    // const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailPattern = /^\d+@iitdh\.ac\.in$/;
        return emailPattern.test(email);
    };


    const handleSubmit = async (e) => {
        // console.log("clicked");
        e.preventDefault(); 

        if (validateEmail(email)) {
            // setError('');
            // Proceed with form submission or further processing
            const response=await axios.post(URL+"/library/user/register",{name,email});
            if(response.data.success){
                navigate('/verify-otp',{state:{name,email}});
                toast.success(response.data.message);
                console.log("sent!");
            }else{
                toast.error(response.data.message);
            }


            console.log('Email is valid:', email);
        } else {
            // setError('Invalid email format. Please enter a valid IITDH email!');
            toast.error('Invalid email format. Please enter a valid IITDH email!');
        }


        // Add your form submission logic here, e.g., sending a request to an API
        // const response=await axios.post(URL+"/library/user/register",{name,email});
        // if(response.data.success){
        //     navigate('/verify-otp',{state:{name,email}});
        //     toast.success(response.data.message);
        //     console.log("sent!");
        // }else{
        //     toast.error(response.data.message);
        // }
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
                                <header>Sign Up</header>
                                <div className="input-field mb-3">
                                    <input 
                                        type="text" 
                                        className="input"  
                                        id="name" 
                                        required 
                                        autoComplete="off" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label htmlFor="name" className="form-label">Name</label>
                                </div>
                                <div className="input-field mb-3">
                                    <input 
                                        type="email" 
                                        className="input" 
                                        id="email" 
                                        required 
                                        autoComplete="off" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="email" className="form-label">Email</label>
                                </div>
                                <div className="input-field mb-3">
                                    <input type="submit" className="btn btn-primary submit" value="Send OTP" />
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

export default Register;
