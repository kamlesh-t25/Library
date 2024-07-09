import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './SetPwd.css';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Password_reset_setPwd = ({URL}) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location=useLocation();

  const {email}=location.state;

  const handleSubmit = async (e) => {
      console.log("clicked");
      e.preventDefault();
      const response=await axios.post(URL+"/library/user/resetPwd_updateUser",{email,password});
      if(response.data.success){
        navigate('/');
        toast.success(response.data.message);
        }else {
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
                                <header>Update Password</header>
                                <div className="input-field">
                                    <input type="password" className="input" id="pass" required value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                    <label htmlFor="pass">Enter Password</label>
                                </div>
                                <div className="input-field">
                                    <input type="submit" className="submit" value="Reset Password" />
                                </div>
                                <div className="signin">
                                    <span>Already have an account? <a href="./">Sign In here</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Password_reset_setPwd;

