import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
      <div className='formDivision'>
      <form action="" className="form_main align-middle text-center" onSubmit={handleSubmit}>
    <p className="heading">Login</p>
    <div className="inputContainer">
    <label htmlFor="username">
            <i className="fas fa-user"></i>
    </label>
    <input type="text" className="inputField" value={username} id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
    </div>
    
<div className="inputContainer">
          <label htmlFor="password">
            <i className="fas fa-lock"></i>
          </label>
    <input type="password" className="inputField" value={password} id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
</div>
              
<button id="button">Submit</button>
</form>
      </div>
    </>
  );
};

export default Login;
