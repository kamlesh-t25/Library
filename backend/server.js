import express from 'express';
import cors from 'cors';
// require('dotenv').config();
import { MongoClient } from 'mongodb';

import dotenv from 'dotenv';
dotenv.config();


import { connectDB } from './config/db.js';
import userRouter from './controllers/userController.js';
import bookRouter from './controllers/bookController.js';
import cartRouter from './controllers/cartController.js';
import orderRouter from './controllers/orderController.js';

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
app.use("/library/cart",cartRouter);
app.use("/library/orders",orderRouter);



//get data from mongodb without mongoose schems

// Connection URL
const url = 'mongodb+srv://kamleshtakhar2783:Kamlesh%40takhar123@library.dbfgmqi.mongodb.net/book-library?retryWrites=true&w=majority&appName=library';
const client = new MongoClient(url);

// Database Name
const dbName = 'book-library';


app.post("/library/admins", async (req, res) => {
    try {
        await client.connect();
        console.log('admins collection Connected successfully to server');
    
        const db = client.db(dbName);
        const collection = db.collection('admins');
    
        const document = await collection.findOne({ email: req.body.email });
        // console.log(document);
        if (document) {
            if (document.password == req.body.password) {
                return res.send({ success: true, message: "You're verified as Admin successfully" });
            } else {
                return res.send({ success: false, message: "Admin's credentials do not match!" });
            }
        } else {
            return res.send({ success: false, message: "User does not exist" });
        }
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data from database');
      }
})



app.listen(PORT,()=>{
    console.log(`Server is running at Port :${PORT}`);
})