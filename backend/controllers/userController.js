import express from 'express';
import { getUserDetails, getUsers, loginUser, registerUser, setPassword, verifyOtp } from '../routes/userRoute.js';
import authMiddleware from '../auth/auth.js';

const userRouter=express.Router();

userRouter.post('/register',registerUser);//initial for send otp
userRouter.post('/verifyOtp',verifyOtp);
userRouter.post('/saveUser',setPassword);
userRouter.post('/login',loginUser);
userRouter.post("/getUser",authMiddleware,getUserDetails);
userRouter.get("/get",getUsers);


export default userRouter;