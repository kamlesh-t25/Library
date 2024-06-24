import express from 'express';
import { changeStatus, getOrders, getUserOrder, requestBook } from '../routes/orderRoute.js';
import authMiddleware from '../auth/auth.js';

const orderRouter=express.Router();


orderRouter.post("/requestBook",authMiddleware,requestBook);
orderRouter.post("/updateStatus",authMiddleware,changeStatus);
orderRouter.post("/userOrder",authMiddleware,getUserOrder);
orderRouter.get("/getOrders",getOrders);


export default orderRouter;