import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { books_data } from "../assets/assets";
// import { food_list } from "../assets/assets";
export const StoreContext=createContext(null);


const StoreContextProvider=(props)=>{
    const URL="http://localhost:4000";

    const [token,setToken]=useState('');
    const [subCategory,setSubCategory]=useState('');
    const [booksList,setBooksList]=useState([]);
    const [cartData,setCartData]=useState({});


    

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            console.log("1111");
        }
    }, []);
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            console.log("1111");
        }
    }, [token]);


    useEffect(()=>{
        getBooksList();
        getCartData();
    },[])

    useEffect(()=>{
        getCartData();
    },[token])

    const getBooksList=async()=>{
        const response =await axios.get(URL+"/library/books/list");
        console.log("Response: - "+response.data)
        if(response.data.success){
            setBooksList(response.data.data);
        }else{
            console.log("Error in setBooksList in context");
        }
    }

    useEffect(() => {
        console.log("Books List updated:", booksList);
    }, [booksList]);


    //cart function
    const addToCart=async(itemId)=>{
        const respo=await axios.post(URL+"/library/cart/add",{itemId},{headers:{token}});
        if(respo.data.success){
            toast.success(respo.data.message);
            getCartData();
        }else{
            toast.error(respo.data.message);
        }
    }

    const removeFromCart=async(itemId)=>{
        const respo=await axios.post(URL+"/library/cart/remove",{itemId},{headers:{token}});
        if(respo.data.success){
            toast.success(respo.data.message);
            getCartData();
        }else{
            toast.error(respo.data.message);
        }
    }

    // const getCartData=async()=>{
    //     const respo=await axios.post(URL+"/library/cart/get",{},{headers:{token}});
    //     setCartData(respo.data.data);
    // }
    

    const getCartData = async () => {
        try {
            const response = await axios.post(URL + "/library/cart/get", {}, { headers: { token } });
            setCartData(response.data.data);
        } catch (error) {
            console.error("Error fetching cart data:", error);
            setCartData([]);
        }
    };


    useEffect(()=>{
        console.log("CartData updated : -"+cartData);
    },[cartData])

    //only once for adding data to database once
    // useEffect(() => {
    //     var count=0;
    //     const addData = async () => {
    //       try {
    //         for (const element of books_data) {
    //           await axios.post(URL + "/library/books/add", element);
    //         //   console.log(element);
    //         count++;
    //         }
    //       } catch (error) {
    //         console.error("Error adding data:", error);
    //       }
    //     };
    //     addData();
    //     console.log("Count : "+count);
    //   }, []);
     

    const contextValue={
        URL,
        token,setToken,
        subCategory,setSubCategory,
        booksList,
        addToCart,removeFromCart,getCartData,
        cartData

    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;