import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    bookId: { type: String, required: true },
    status: { type: String, default: "Pending" }
},{timestamps:true});


const orderSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:[itemSchema],required:true}
},{timestamps:true})


const orderModel=mongoose.models.Orders || mongoose.model("Orders",orderSchema);

export default orderModel;