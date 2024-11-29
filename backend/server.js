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

// connectDB();

//we are using this function to avoid timed out..because sometimes server send request to databse before connection
const startServer=async()=>{
  await connectDB();
}
startServer();

//middleware
app.use(express.json());
app.use(cors());

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


app.get("/library/:category",async(req,res)=>{
    const categoryName = req.params.category;
  
  try {
    // Connect to MongoDB
    // const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    console.log('Connected successfully to MongoDB');

    const database = client.db(dbName);
    const collection = database.collection('category_department');

    // Find the category document
    const category = await collection.findOne({ category: categoryName });

    if (category) {
        res.send({success:true,data:category.departments});
    } else {
      res.status(404).json({success:false, message: 'Category not found 2' });
    }

    // Close the connection
    // await client.close();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
})


//we can not define this route as "/library/getCategories" ..because it will give 404 error because of "/library/:category" route
app.get("/library/get/categories",async(req,res)=>{
  try {
    // const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    console.log('Connected successfully to MongoDB 2');

    const database = client.db(dbName);
    const collection = database.collection('category_department');

    // Find the category document
    const categories = await collection.find({}).toArray();
    if (categories.length > 0) {
        res.send({success:true,data:categories});
    } else {
      res.status(404).json({success:false, message: 'Categories array not found' });
    }

    // Close the connection
    // await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})



app.listen(PORT,()=>{
    console.log(`Server is running at Port :${PORT}`);
})