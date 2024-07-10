import orderModel from "../models/orderModel.js";


const requestBook=async(req,res)=>{
    const {userId,bookId}=req.body;
    try {
        let order=await orderModel.findOne({userId});

        if(order){
            let isExist=order.items.find((i)=>i.bookId==bookId);
            // console.log("Order exist");
            if(isExist){
                // console.log("111");
                return res.json({success:false,message:"Book is already requested or approved !"})
            }
        }

        if(!order){
            order=new orderModel({userId,items:[{bookId}]});
        }else{
            order.items.push({bookId});
        }

        await order.save();
        res.json({success:true,message:"Request accepted!"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Failed to request book"});
    }
}


//for admin panel
const changeStatus = async (req, res) => {
    const { userId, bookId, newStatus } = req.body;
    try {
        // Find the order document for the user
        let order = await orderModel.findOne({ userId, "items.bookId": bookId });

        if (!order) {
            // console.log(userId);
            return res.status(404).json({ success: false, message: "Order or book not found" });
        }

        // Check if the item is already approved
        const item = order.items.find(item => item.bookId === bookId);
        if (item && item.status === 'Approve') {
            // Remove the item from the order
            order.items = order.items.filter(item => item.bookId !== bookId);
            return res.json({success:false,message:"Book is already approved !"});
        } else {
            // Update the status of the specific book
            if (item) {
                item.status = newStatus;
            }
        }

        // Save the updated order document
        await order.save();
        res.json({ success: true, message: "Order status updated successfully", order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to update order status" });
    }
}


//for frontend return 
const changeReturnStatus = async (req, res) => {
    const { userId, bookId } = req.body;
    try {
        // Find the order document for the user
        let order = await orderModel.findOne({ userId, "items.bookId": bookId });

        if (!order) {
            // console.log(`Order not found for userId: ${userId}`);
            return res.status(404).json({ success: false, message: "Order or book not found" });
        }
        const item = order.items.find(item => item.bookId === bookId);
        if(item.status !="Approve"){
            return res.json({success:false,message:"Book need to be approved for return !"});
        }
        // Find the specific book in the order items
        const itemIndex = order.items.findIndex(item => item.bookId === bookId);
        if (itemIndex === -1) {
            return res.status(404).json({ success: false, message: "Book not found in the order" });
        }

        // Update the status of the specific book to "Returned"
        order.items[itemIndex].status = "Returned";

        // Remove the book from the items array
        order.items = order.items.filter(item => item.bookId !== bookId);

        // Save the updated order document
        await order.save();
        res.json({ success: true, message: "Book returned and removed from the order", order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to return the book" });
    }
};


const getUserOrder=async(req,res)=>{
    const {userId}=req.body;
    try {
        let orders=await orderModel.findOne({userId});
        // console.log("Order : -"+orders);
        res.json({success:true,data:orders});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"ERROR"});
    }
}

const getOrders=async(req,res)=>{
    try {
        let userOrder=await orderModel.find({});
        res.json({success:true,data:userOrder});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"ERROR"});
    }
}


const deleteUserOrders=async(req,res)=>{
    const {userId}=req.body;
    try {
        let userOrder=await orderModel.findOneAndDelete({userId});
        if(!userOrder){
            return res.json({success:true,message:"Orders for this user does not exist"})
        }
        res.json({success:true,message:"User Orders deleted"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"ERROR"});
    }
}



export {requestBook,getOrders,getUserOrder,changeStatus,changeReturnStatus,deleteUserOrders};