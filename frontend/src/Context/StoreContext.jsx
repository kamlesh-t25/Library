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
    const [orders,setOrders]=useState([]);

    

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
        // getUserOrder();
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
        getUserOrder();
    },[cartData])


    //functions to manage orders
    const requestBook=async(bookId)=>{
        const response=await axios.post(URL+"/library/orders/requestBook",{bookId},{headers:{token}});
        console.log(response);

        const response2=await axios.post(URL+"/library/cart/remove",{itemId:bookId},{headers:{token}});
        getCartData();
    }

    const changeStatus=async(bookId)=>{
        const response=await axios.post(URL+"/library/orders/updateStatus",{bookId},{headers:{token}});
        console.log(response);

    }

    const getUserOrder=async()=>{
        const response=await axios.post(URL+"/library/orders/userOrder",{},{headers:{token}});
        setOrders(response.data.data);
        console.log("Set orders :"+ orders);
        console.log("User order : -"+JSON.stringify(response.data.data, null, 2));
    }

    useEffect(() => {
        if (token) {
          getUserOrder();
        }
      }, []);
    

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
        cartData,
        requestBook,changeStatus,getUserOrder,orders


    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;