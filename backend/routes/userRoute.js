import userModel from "../models/userModel.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();



let otpStorage = {};
let userStorage = {};

const createToken=(id)=>{
    return jwt.sign({id},'your-secret-key');
}



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    debug: true // Enable debug logging
});


function generateRandom4DigitNumber() {
    return Math.floor(1000 + Math.random() * 9000);
}





const registerUser=async(req,res)=>{
    const {name,email}=req.body;
    const otp=generateRandom4DigitNumber();
    otpStorage[email]=otp;

    const user=await userModel.findOne({email});
    if(user){
        return res.json({success:false,message:"User already exists!"});
    }
    
    const mailOptions={
        from: process.env.EMAIL,
        to:email,
        subject: 'OTP Verification',
        text:`Your OTP is ${otp}`
    };

        // console.log("email is :",email);
        // console.log('Email:', process.env.EMAIL);
        // console.log('Password:', process.env.PASSWORD);
        console.log("OTP",otp);

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error:', error); // Log the error
                return res.json({success: false, message: "Error in sending mail", error: error.message});
            }
            res.json({success: true, message: "Mail sent!"});
        });

    
}

const verifyOtp=async(req,res)=>{
    const {name,email,otp}=req.body;
    if(otpStorage[email]== otp){
        otpStorage[email]='verified';
        res.json({success:true,message:"OTP verified"});
        // res.status(200).send('OTP verified');
    }else{
        res.json({success:false,message:"OTP not verified"});
    }
}

const setPassword=async(req,res)=>{
    const {name,email,password}=req.body;

    if (otpStorage[email] !== 'verified') {
        return res.json({success:false,message:'Otp not verified'});
    }

    try {
        const salt=await bcrypt.genSalt(8);
        const hashedPassword=await bcrypt.hash(password.toString(),salt);
        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword
        });
        
        
        const user=await newUser.save();
        const token=createToken(user._id);

        delete otpStorage[email];
        res.json({success:true,token});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error in saving User"});
    }
}

const loginUser=async(req,res)=>{
    const {email,password}=req.body;

    try {
        const user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"user doesn't exist"});
        }
        const isMatch=await bcrypt.compare(String(password),String(user.password));

        if(!isMatch) return res.json({success:false,message:"Invalid credentials"});

        const token=createToken(user._id);
          

        res.json({success:true,token});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error in Login!"});
    }
}

const getUserDetails=async(req,res)=>{

    try {
        const user=await userModel.findOne({_id:req.body.userId});
        // console.log(user);
        res.json({success:true,data:user});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

const getUsers=async(req,res)=>{
    try {
        const user=await userModel.find({});
        // console.log(user);
        res.json({success:true,data:user});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}


//routes for fogot password resetting***
const resetPwd_EmailSending=async(req,res)=>{
    const {email}=req.body;
    const otp=generateRandom4DigitNumber();
    otpStorage[email]=otp;

    const user=await userModel.findOne({email});
    if(!user){
        return res.json({success:false,message:"User does not exists!"});
    }
    
    const mailOptions={
        from: process.env.EMAIL,
        to:email,
        subject: 'OTP Verification',
        text:`Your OTP is ${otp}`
    };

        // console.log("email is :",email);
        // console.log('Email:', process.env.EMAIL);
        // console.log('Password:', process.env.PASSWORD);
        // console.log("OTP",otp);

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error:', error); // Log the error
                return res.json({success: false, message: "Error in sending mail", error: error.message});
            }
            res.json({success: true, message: "Mail sent!"});
        });

}

const resetPwd_otpVerify=async(req,res)=>{
    const {email,otp}=req.body;
    if(otpStorage[email]== otp){
        otpStorage[email]='verified';
        res.json({success:true,message:"OTP verified"});
    }else{
        res.json({success:false,message:"OTP is not correct !"});
    }
}


const resetPwd_updateUserPwd = async (req, res) => {
    const { email, password } = req.body;

    if (otpStorage[email] !== 'verified') {
        return res.json({ success: false, message: 'Otp is not verified!' });
    }

    try {
        // Find the user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: 'User not found!' });
        }

        // Generate salt and hash the new password
        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password.toString(), salt);
        
        // Update the user's password
        user.password = hashedPassword;
        await user.save();
        
        // Optionally, generate a token if required
        // const token = generateToken(user); // Define and implement the generateToken function
        delete otpStorage[email];
        res.json({ success: true, message: "User password updated." }); // Include token if applicable
    } catch (error) {
        console.error("Error in saving user:", error);
        res.json({ success: false, message: "Error in saving user" });
    }
};


export {registerUser,loginUser,verifyOtp,setPassword,getUserDetails,getUsers,resetPwd_EmailSending,resetPwd_otpVerify,resetPwd_updateUserPwd};