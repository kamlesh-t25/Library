import React, { useContext, useEffect } from 'react'
import './UserDetails.css';
import { StoreContext } from '../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserDetails = () => {
    const {users,URL}=useContext(StoreContext);

    const deleteUserHandler=async(userId)=>{
      let response1=await axios.post(URL+"/library/user/deleteUser",{userId});
      if(response1.data.success){
        let response2=await axios.post(URL+"/library/orders/deleteUserOrder",{userId});
        if(response2.data.success){
          toast.success(response1.data.message+" & "+response2.data.message);
        }else{
          toast.error(response2.data.message);
        }
      }else{
        toast.error(response1.data.message);
      }
    }

    useEffect(()=>{
      console.log("Users :",users);
    },[])
    
  return (
    <div className='userDetails-container'>
      <div className="user-elements">
        {users.map((user,index)=>{
          return (
            <div key={index} className="user-element">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <button onClick={()=>deleteUserHandler(user._id)} className='deleteUser-button'>Delete User</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserDetails
