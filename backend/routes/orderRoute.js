import orderModel from "../models/orderModel.js";


const requestBook=async(req,res)=>{
    const {userId,bookId}=req.body;
    try {
        let order=await orderModel.findOne({userId,"items.status":"Pending"});

        if(!order){
            order=new orderModel({userId,items:[{bookId}]});
        }else{
            order.items.push({bookId});
        }

        await order.save();
        res.json({success:true,message:"Requested!"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Failed to request book"});
    }
}

const changeStatus = async (req, res) => {
    const { userId, bookId } = req.body;
    try {
        // Find the order document for the user
        let order = await orderModel.findOne({ userId, "items.bookId": bookId, "items.status": "Pending" });

        if (!order) {
            return res.status(404).json({ success: false, message: "Order or book not found or already approved" });
        }

        // Update the status of the specific book
        const item = order.items.find(item => item.bookId === bookId);
        if (item) {
            item.status = "Approved";
        }

        // Save the updated order document
        await order.save();
        res.json({ success: true, message: "Order approved!", order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to approve order" });
    }
}


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
        let userOrder=await orderModel.findOne({});
        res.json({success:true,data:userOrder});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"ERROR"});
    }
}

export {requestBook,getOrders,getUserOrder,changeStatus};