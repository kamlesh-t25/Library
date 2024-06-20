import express from 'express';
import { addToCart, getCartItems, removeFromCart } from '../routes/cartRoute.js';
import authMiddleware from '../auth/auth.js';

const cartRouter=express.Router();

cartRouter.post("/add",authMiddleware,addToCart);
cartRouter.post('/remove',authMiddleware,removeFromCart);
cartRouter.post('/get',authMiddleware,getCartItems);

export default cartRouter;