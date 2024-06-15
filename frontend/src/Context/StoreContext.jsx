import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
export const StoreContext=createContext(null);


const StoreContextProvider=(props)=>{
    const URL="http://localhost:4000";

    const [token,setToken]=useState('');
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            console.log("1111");
        }
    }, []);

    const contextValue={
        URL,
        token,setToken,

    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;