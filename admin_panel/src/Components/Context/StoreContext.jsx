import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{
    const URL="http://localhost:4000";

    const [orders, setOrders] = useState([]);
    const [booksList,setBooksList]=useState([]);
    const [users,setUsers]=useState([]);


    // useEffect(()=>{
    //     const getAdmins=async()=>{
    //         const response=await axios.get(URL+"/library/admins");
    //         console.log("Admins :-  ",response.data);
    //     }
    //     getAdmins();
    // },[])


    const getAllOrders=async(req,res)=>{
        const response=await axios.get(URL+"/library/orders/getOrders");
        if(response.data.success){
            setOrders(response.data.data);
            // console.log(response.data.data);
        }else {
            alert(response.data.message);
        }
    }

    const getUsers=async()=>{
        const response =await axios.get(URL+"/library/user/get");
        // console.log(response.data.data);
        setUsers(response.data.data);
    }

    const getUserName=async(userId)=>{
        const user=users.find((e)=>e._id==userId);
        // console.log(user.name);
        return user.name;
    }

    const getBooksList=async()=>{
        const response =await axios.get(URL+"/library/books/list");
        // console.log("Response: - "+response.data)
        if(response.data.success){
            setBooksList(response.data.data);
        }else{
            console.log("Error in setBooksList in context");
        }
    }


    const deleteBook=async(id)=>{
        const response=await axios.post(URL+"/library/books/delete",{id});
        if(response.data.success){
            toast.success(response.data.message);
            getBooksList();
        }else{
            toast.error(response.data.message);
        }
    }

    const addBook=async(bookData)=>{
        const response=await axios.post(URL+"/library/books/add",bookData);
        if(response.data.success){
            toast.success(response.data.message);
            getBooksList();
        }else{
            toast.error(response.data.message);
        }
    }

    const statusChange=async(userId,bookId,newStatus)=>{
        const response=await axios.post(URL+"/library/orders/updateStatus",{userId,bookId,newStatus});
        if(response.data.success){
            const response2=await axios.post(URL+"/library/books/update-count",{id:bookId});
            if(response2.data.success){
                toast.success(response.data.message +" and "+response2.data.message);
                getBooksList();
            }
            // toast.success(response.data.message);
            getAllOrders();
        }else{
            toast.error(response.data.message);
        }
    }


    useEffect(()=>{
        getAllOrders();
        // getUserName("66702ba95083d3aa3b92447e");
        getBooksList();
        getUsers();
    },[])
    
    const contextValue={
        URL,
        orders,booksList,deleteBook,
        getUserName,users,
        statusChange,addBook
    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;