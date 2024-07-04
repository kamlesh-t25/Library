// import { useContext, useEffect, useState } from 'react';

// import './App.css';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import Home from './Pages/Home/Home.jsx';
// import PlaceRequest from './Pages/PlaceRequest/PlaceRequest';
// import Navbar from './Components/Navbar/Navbar.jsx'
// import Footer from './Components/Footer/Footer.jsx';
// import Register from './Pages/Register/Register.jsx';
// import SendOtp from './Pages/SendOtp/SendOtp.jsx';
// import SetPwd from './Pages/SetPwd/SetPwd.jsx';
// import { StoreContext } from './Context/StoreContext.jsx';
// import Login from './Pages/Login/Login.jsx';

// //for notification
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



// function App() {
//   const [count, setCount] = useState(0);
//   const {URL}=useContext(StoreContext);

//   const navigate=useNavigate();

//   const [token,setToken]=useState('');
//   useEffect(()=>{
//     if(localStorage.getItem('token')){
//       console.log("Token exist");
//       navigate('/home');
//     }
//   },[])


//   return (
//   <>
//   <ToastContainer />
//     <div className='app-body'>
//       <Router>
//         <div className='app'>
//           <Routes>
//             <Route path='/' element={<Register URL={URL}/>} />
//             <Route path='/verify-otp' element={<SendOtp URL={URL}/>} />
//             <Route path='/set-password' element={<SetPwd URL={URL}/>} />
//             <Route path='/login' element={<Login URL={URL} />} />
//             <Route path='/home' element={<Home />} />
//             <Route path='/placerequest' element={<PlaceRequest/> } />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//     {/* <Footer/> */}
//   </>
//   );
// }

// export default App;




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


function App() {
  const { URL } = useContext(StoreContext);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1000);
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
              <Route path='/forgot_password' element={<Password_reset URL={URL} />} />
              <Route path='/home' element={<Home />} />
              <Route path='/orders' element={<Orders/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/home/:categoryName' element={<BooksPage/>} />
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
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  }, [navigate]);

  return <Component URL={URL} />;
}

export default App;

