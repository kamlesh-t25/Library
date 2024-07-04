import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = ({URL}) => {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handelSubmit = async function(e){
        e.preventDefault();
        const response=await axios.post(URL+"/library/user/login",{email,password});
        if(response.data.success){
            navigate('/home');
            localStorage.setItem('token',response.data.token);
            toast.success("Login successfully!")
        }else{
            navigate('/');
            toast.error(response.data.message);
        }
    }
    return (
        <div className="wrapper">
            <div className="container main">
                <div className="row">
                    <div className="col-md-6 side-image" style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1545696648-86c761bc5410?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '10px 10px 0 0',
                        position: 'relative'
                    }}>
                        {/* Image or text can be added here if needed */}
                        {/* <img src="../assets/IITDh.png" alt=""> */}
                        {/* <div className="text">
                            <p>Join the community of developers <i>- ludiflex</i></p>
                        </div> */}
                    </div>

                    <div className="col-md-6 right">
                        <div className="input-box">
                            <form onSubmit={handelSubmit}>
                                <header>Sign In</header>
                                <div className="input-field">
                                    <input type="email" className="input" id="email" required autoComplete="off" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field">
                                    <input type="password" className="input" id="pass" required value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                    <label htmlFor="pass">Password</label>
                                </div>
                                <div className="input-field">
                                    <input type="submit" className="submit" value="Sign In" />
                                </div>
                                <div className="signin">
                                    <span>Don't have an account? <a href="/">Sign Up here</a></span> <br></br>
                                    <span >Forgot your password? <a href="/forgot_password" style={{color:"orange"}}>Reset it here</a></span>
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login
