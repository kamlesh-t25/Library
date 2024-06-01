// mongodb+srv://kamleshtakhar2783:Kamlesh@takhar123@library.dbfgmqi.mongodb.net/book-library
import mongoose from 'mongoose';


//password is Kamlesh@takhar123....@should not be used in connection directly so use %40 at place
export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://kamleshtakhar2783:Kamlesh%40takhar123@library.dbfgmqi.mongodb.net/book-library?retryWrites=true&w=majority&appName=library").then(()=>{
        console.log("DB connected");
    })
}