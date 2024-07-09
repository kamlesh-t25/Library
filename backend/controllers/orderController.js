import express from 'express';
import { changeReturnStatus, changeStatus, deleteUserOrders, getOrders, getUserOrder, requestBook } from '../routes/orderRoute.js';
import authMiddleware from '../auth/auth.js';

const orderRouter=express.Router();


orderRouter.post("/requestBook",authMiddleware,requestBook);
orderRouter.post("/updateStatus",changeStatus);
orderRouter.post("/userOrder",authMiddleware,getUserOrder);
orderRouter.get("/getOrders",getOrders);
orderRouter.post("/returnStatus",authMiddleware,changeReturnStatus);
orderRouter.post("/deleteUserOrder",deleteUserOrders);


export default orderRouter;