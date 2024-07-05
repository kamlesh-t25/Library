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
    const [userName,setUserName]=useState("");
    const [weatherData,setWeatherData]=useState(false);
    // const [users,setUsers]=useState([]);
    

    const getUserName=async()=>{
        let response=await axios.post(URL+"/library/user/getUser",{},{headers:{token}});
        console.log("User Data : -"+response.data.data);
        setUserName(response.data.data);
    }

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            getUserName();
        }else{
            setUserName(""); // Reset userName when token is cleared (logout)
            setBooksList([]); // Reset booksList when token is cleared (logout)
            setCartData({}); // Reset cartData when token is cleared (logout)
            setOrders([]); 
        }
    }, []);
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            getUserName();
        }else{
            setUserName(""); // Reset userName when token is cleared (logout)
            setBooksList([]); // Reset booksList when token is cleared (logout)
            setCartData({}); // Reset cartData when token is cleared (logout)
            setOrders([]); 
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
        if(response.data.success){
            toast.success(response.data.message);
            getUserOrder();
        }else{
            toast.error(response.data.message);
        }
        const response2=await axios.post(URL+"/library/cart/remove",{itemId:bookId},{headers:{token}});
        getCartData();
    }

    const changeStatus=async(bookId)=>{
        console.log("BookId : -"+bookId);
        const response=await axios.post(URL+"/library/orders/returnStatus",{bookId},{headers:{token}});
        getUserOrder();
        return response;
    }

    const returnBook=async(id)=>{
        if(token){
            const response2=await changeStatus(id);
            if(response2.data.success){
                const response=await axios.post(URL+"/library/books/increaseCount",{id});
                if(response.data.success){
                    toast.success(response2.data.message +" & "+response.data);
                }else{
                    toast.error(response.data.message);
                }
            }else{
                toast.error(response2.data.message);
            }
        }else{
            console.log("Token not found !");
        }

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


      //weather api
      const getWeatherData=async()=>{
        try {
            const city="Dharwad";
            const api_key="9706f9e6c7b105b01116287e836fde6c";
            // const url=`https://api.openweathermap.org/data/2.5/weather?q=${import.meta.env.VITE_WEATHER_CITY_NAME}&appid=${import.meta.env.VITE_WEATHER_APP_API}`
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
            const response =await fetch(url);
            const data=await response.json();
            console.log("Weather Data: ",data);
            setWeatherData({
                humidity:data.main.humidity,
                windSpeed:data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name,
                icon:`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

            })
        } catch (error) {
            console.log(error);
        }
      }

      useEffect(()=>{
        getWeatherData();
      },[])
    

    // only once for adding data to database once
    useEffect(() => {
        var count=0;
        const addData = async () => {
          try {
            for (const element of books_data) {
              await axios.post(URL + "/library/books/add", element);
            //   console.log(element);
            count++;
            }
          } catch (error) {
            console.error("Error adding data:", error);
          }
        };
        addData();
        console.log("Count : "+count);
      }, []);
     

    const contextValue={
        URL,
        weatherData,
        token,setToken,userName,setUserName,
        subCategory,setSubCategory,
        booksList,setBooksList,
        addToCart,removeFromCart,getCartData,setCartData,
        cartData,
        requestBook,changeStatus,getUserOrder,orders,setOrders, 
        returnBook


    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
