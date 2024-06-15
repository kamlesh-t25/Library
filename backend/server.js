import express from 'express';
import cors from 'cors';
// require('dotenv').config();

import dotenv from 'dotenv';
dotenv.config();


import { connectDB } from './config/db.js';
import userRouter from './controllers/userController.js';
import bookRouter from './controllers/bookController.js';

const PORT=4000;
const app=express();

//middleware
app.use(express.json());
app.use(cors());


connectDB();

app.get('/',(req,res)=>{
    res.send("Api working");
})


app.use("/library/user",userRouter);
app.use('/library/books',bookRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at Port :${PORT}`);
})