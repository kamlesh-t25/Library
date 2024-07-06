import express from 'express';
import { getUserDetails, getUsers, loginUser, registerUser, resetPwd_EmailSending, resetPwd_otpVerify, resetPwd_updateUserPwd, setPassword, verifyOtp } from '../routes/userRoute.js';
import authMiddleware from '../auth/auth.js';

const userRouter=express.Router();

userRouter.post('/register',registerUser);//initial for send otp
userRouter.post('/verifyOtp',verifyOtp);
userRouter.post('/saveUser',setPassword);
userRouter.post('/login',loginUser);
userRouter.post("/getUser",authMiddleware,getUserDetails);
userRouter.get("/get",getUsers);

userRouter.post("/resetPwd_sendOTP",resetPwd_EmailSending);
userRouter.post("/resetPwd_verifyOTP",resetPwd_otpVerify);
userRouter.post("/resetPwd_updateUser",resetPwd_updateUserPwd);


export default userRouter;