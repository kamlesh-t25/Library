import { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Register from './Pages/Register/Register.jsx';
import SendOtp from './Pages/SendOtp/SendOtp.jsx';
import SetPwd from './Pages/SetPwd/SetPwd.jsx';
import { StoreContext } from './Context/StoreContext.jsx';
import Login from './Pages/Login/Login.jsx';

// for notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from './Pages/Orders/Orders.jsx';
import LoadingPage from './Components/LoadingPage/LoadingPage.jsx';
import BooksPage from './Pages/BooksPage/BooksPage.jsx';
import Cart from './Pages/Cart/Cart.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Password_reset from './Pages/Password_setup/Password_reset.jsx';
import ResetPwd_OtpVerify from './Pages/ResetPwd_OtpVerify/ResetPwd_OtpVerify.jsx';
import Password_reset_setPwd from './Pages/Password_reset_setPwd/Password_reset_setPwd.jsx';
import Userinfo from './Components/Userinfo/Userinfo.jsx';


function App() {
  const { URL } = useContext(StoreContext);
  const [loading,setLoading]=useState(false);


  // console.log("env: "+import.meta.env.VITE_WEATHER_APP_API);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[])
  return (
    <div className='app-loading'>
    {
      loading ? <LoadingPage/> 
      :
      <div>
        <ToastContainer />
      <div className='app-body'>
        <Router>
          <div className='app'>
            <Routes>
              {/* <Route path='/login' element={<ProtectedRoute component={Login} URL={URL} />} /> */}
              <Route path='/verify-otp' element={<SendOtp URL={URL} />} />
              <Route path='/set-password' element={<SetPwd URL={URL} />} />
              <Route path='/' element={<Register URL={URL} />} />
              <Route path='/login' element={<Login URL={URL} />} />
              <Route path='/home' element={<ProtectedRoute component={Home}/>} />
              <Route path='/orders' element={<ProtectedRoute component={Orders} />} />
              <Route path='/cart' element={<ProtectedRoute component={Cart} />} />
              <Route path='/home/:categoryName' element={<ProtectedRoute component={BooksPage} />} />
              <Route path='/user' element={<ProtectedRoute component={Userinfo} />} />
              {/* forgot password Routes */}
              <Route path='/forgot_password' element={<Password_reset URL={URL} />} />
              <Route path='/resetPwd_otpVerify' element={<ResetPwd_OtpVerify URL={URL} />} />
              <Route path='/setNewPassword' element={<Password_reset_setPwd URL={URL} />} />

            </Routes>
          </div>
        </Router>
      </div>
      </div>

      }
    </div>
  );
}

function ProtectedRoute({ component: Component, URL }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/login");
    }
  }, [navigate]);

  return <Component URL={URL} />;
}

export default App;

