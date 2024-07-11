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

// async function insertCategoryData(){
//     try {
//         // Connect to MongoDB
//         await client.connect();
//         console.log('Connected to MongoDB');
    
//         // Specify the database and collection
//         const database = client.db(dbName);
//         const collection = database.collection("category_department");
    
//         // Data to be inserted
//         const data = [
//             {
//               "category": "Engineering",
//               "departments": [
//                 {
//                   "name": "Mechanical Engineering",
//                   "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hic5MYPQCRyuaCrIA_RV_G8kLFHqzWUo8A&s"
//                 },
//                 {
//                   "name": "Electrical Engineering",
//                   "image_url": "https://seeklogo.com/images/T/trust-me-i-am-electrical-engineer-logo-DBF878EEBA-seeklogo.com.png"
//                 },
//                 {
//                   "name": "Civil Engineering",
//                   "image_url": "https://cdn.vectorstock.com/i/500p/08/15/worker-icon-stylized-logo-construction-vector-30080815.jpg"
//                 },
//                 {
//                   "name": "Chemical Engineering",
//                   "image_url": "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A842PA3861PT28D1039953301W7926H10000/views/1,width=800,height=800,appearanceId=842,backgroundColor=F2F2F2/chemical-engineering-logo-chemistry-engineer-sticker.jpg"
//                 },
//                 {
//                   "name": "Computer Science and Engineering",
//                   "image_url": "https://www.shutterstock.com/image-vector/computer-science-icon-outline-thin-600nw-1613513884.jpg"
//                 },
//                 {
//                   "name": "Engineering Physics",
//                   "image_url": "https://pbs.twimg.com/profile_images/1112954774478090240/GA6CTscP_400x400.png"
//                 }
//               ]
//             },
//             {
//               "category": "Sciences",
//               "departments": [
//                 {
//                   "name": "Physics",
//                   "image_url": "https://t4.ftcdn.net/jpg/02/82/19/53/360_F_282195356_Qnba54RyXAWkuEU2BYgIrBNTWIO3pzL5.jpg"
//                 },
//                 {
//                   "name": "Chemistry",
//                   "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkDv9BsfX252WBL6rdPt1meIPOnwk3Fey-Ew&s"
//                 },
//                 {
//                   "name": "Mathematics",
//                   "image_url": "https://t3.ftcdn.net/jpg/04/36/20/28/360_F_436202824_9jWSKpjDrITJIVmkdBedp707rF5wLSjK.jpg"
//                 },
//                 {
//                   "name": "Biology",
//                   "image_url": "https://pics.craiyon.com/2023-10-13/133246b9c725491fb795a8bdee076872.webp"
//                 }
//               ]
//             },
//             {
//               "category": "Technology and Applied Sciences",
//               "departments": [
//                 {
//                   "name": "Information Technology",
//                   "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQYCa7gtWbynCwOZmwrxjMt9X_oEVYMbeIg&s"
//                 },
//                 {
//                   "name": "Artificial Intelligence",
//                   "image_url": "https://st.depositphotos.com/33407126/54029/i/450/depositphotos_540292192-stock-photo-circuit-board-computer-style-brain.jpg"
//                 },
//                 {
//                   "name": "Data Science",
//                   "image_url": "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg"
//                 },
//                 {
//                   "name": "Cybersecurity",
//                   "image_url": "https://www.raxatechnosecuritysolutions.in/assets/img/Cyber-Security_Banner.jpg"
//                 }
//               ]
//             },
//             {
//               "category": "Programming and Software Development",
//               "departments": [
//                 {
//                   "name": "Python",
//                   "image_url": "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1"
//                 },
//                 {
//                   "name": "Java",
//                   "image_url": "https://education.oracle.com/file/general/p-80-java.png"
//                 },
//                 {
//                   "name": "C/C++",
//                   "image_url": "https://user-images.githubusercontent.com/79866006/236609770-d36c7858-a686-43f0-be41-250ac679f836.png"
//                 },
//                 {
//                   "name": "JavaScript",
//                   "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
//                 }
//               ]
//             },
//             {
//               "category": "Business and Management",
//               "departments": [
//                 {
//                   "name": "Finance",
//                   "image_url": "https://happay.com/blog/wp-content/uploads/sites/12/2023/11/corporate-finance.webp"
//                 },
//                 {
//                   "name": "Entrepreneurship",
//                   "image_url": "https://images.inc.com/uploaded_files/image/1920x1080/getty_180152187_48132.jpg"
//                 },
//                 {
//                   "name": "Business Analytics",
//                   "image_url": "https://www.michiganstateuniversityonline.com/wp-content/uploads/sites/3/2018/05/what-is-business-analytics.jpg?w=715&h=375&crop=1"
//                 },
//                 {
//                   "name": "Economics",
//                   "image_url": "https://thumbs.dreamstime.com/b/economics-financial-education-handwriting-doodle-icon-ban-banknote-money-currency-investment-profit-graph-cost-analysis-65913064.jpg"
//                 }
//               ]
//             },
//             {
//               "category": "Competitive Exams and Career Development",
//               "departments": [
//                 {
//                   "name": "GATE Preparation",
//                   "image_url": "https://images.shiksha.com/mediadata/images/articles/1582804864phpq24JjK.jpeg"
//                 },
//                 {
//                   "name": "GRE Preparation",
//                   "image_url": "https://meridianstudies.org/wp-content/uploads/2023/07/GRE.jpg"
//                 },
//                 {
//                   "name": "Resume Building and Interview Skills",
//                   "image_url": "https://media.licdn.com/dms/image/C4E12AQHSkg9JrNwPHA/article-cover_image-shrink_600_2000/0/1549464841951?e=2147483647&v=beta&t=pGDMhaEDcxm6ntPE2VaxxfQo3G5gqRCW8X9lZ_mWW1I"
//                 }
//               ]
//             }
//           ];
    
//         // Insert the data into MongoDB
//         const result = await collection.insertMany(data);
//         console.log(`${result.insertedCount} documents were inserted`);
    
//       } catch (error) {
//         console.error('Error inserting data:', error);
//       } finally {
//         // Close the MongoDB connection
//         await client.close();
//         console.log('MongoDB connection closed');
//       }
// }

// Call the function to insert data
// insertCategoryData();


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
    await client.close();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
})


//we ca not define this route as "/library/getCategories" ..because it will give 404 error because of "/library/:category" route
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
    await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})



app.listen(PORT,()=>{
    console.log(`Server is running at Port :${PORT}`);
})