import userModel from "../models/userModel.js";


const addToCart=async(req,res)=>{
    const userData=await userModel.findOne({_id:req.body.userId});
    const cartData=userData.cartData;
    if(cartData[req.body.itemId]){
        return res.json({success:false,message:"Book is already added in cart"});
    }else{
        cartData[req.body.itemId]=1;
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        return res.json({success:true,message:"Book added to cart"});
    }
}

const removeFromCart=async(req,res)=>{
    try {
        const userData=await userModel.findOne({_id:req.body.userId});
        const cartData=userData.cartData;

        delete cartData[req.body.itemId]
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,meesage:"Book removed from cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

const getCartItems=async(req,res)=>{
    try {
        const userData=await userModel.findOne({_id:req.body.userId});
        const cartData=userData.cartData;
        // console.log(cartData);
        res.json({success:true,data:cartData});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export{addToCart,removeFromCart,getCartItems};