import express from 'express';
import { loginUser, registerUser, setPassword, verifyOtp } from '../routes/userRoute.js';

const userRouter=express.Router();

userRouter.post('/register',registerUser);//initial for send otp
userRouter.post('/verifyOtp',verifyOtp);
userRouter.post('/saveUser',setPassword);
userRouter.post('/login',loginUser);

export default userRouter;