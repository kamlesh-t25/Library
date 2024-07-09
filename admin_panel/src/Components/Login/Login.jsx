import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { StoreContext } from '../Context/StoreContext';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const Login = ({isVerified,setVerified}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { URL} = useContext(StoreContext);
  const navigate=useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('adminState')){
      navigate('/home');
    }
  },[])


  const handleSubmit = async (e) => {
    e.preventDefault();
    // verifyAdmin(email, password);
    // console.log(email +" : "+password);
    try {
      const response = await axios.post(`${URL}/library/admins`, { email, password });
      if (response.data.success) {
        // console.log("111");
        navigate("/home");
        toast.success(response.data.message);
        localStorage.setItem('adminState', 'true');
        localStorage.setItem('loginTimestamp', new Date().getTime());
        // setVerified(!isVerified);
      } else {
        console.log("22211");
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during login request:", error);
      toast.error("An error occurred while trying to log in.");
    }
  };

  return (
    <>
      <div className='formDivision'>
        <form action="" className="form_main align-middle text-center" onSubmit={handleSubmit}>
          <p className="heading">Login</p>
          <div className="inputContainer">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>
            </label>
            <input 
              type="email" 
              className="inputField" 
              value={email} 
              id="email" 
              placeholder="Email" 
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          
          <div className="inputContainer">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
            </label>
            <input 
              type="password" 
              className="inputField" 
              value={password} 
              id="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
                
          <button id="button" type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
