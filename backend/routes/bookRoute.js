import bookModel from "../models/bookModel.js";

const addBook=async(req,res)=>{
    const {title,description,category,author,genre,department,count,vendor,vendor_id,publisher,publisher_id}=req.body;

    const newBook=new bookModel({
        title,category,description,author,genre,department,count,vendor,vendor_id,publisher,publisher_id
    })

    
    //if book already exist
    const foundBook=await bookModel.findOne({title});
    if(foundBook){
        return res.json({success:false,message:"Book already exists!"})
    }

    try {
        await newBook.save();
        res.json({success:true,message:"Bood Added"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }

}

const listBooks=async(req,res)=>{
    try {
        const books=await bookModel.find({});
        // console.log("books: -"+books);
        res.json({success:true,data:books});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

const deleteBook=async(req,res)=>{
    try {
        await bookModel.findByIdAndDelete({_id:req.body.id});
        res.json({success:true,message:"Book deleted successfully"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error in deleting book !"});
    }
}

const updateBookCount = async (req, res) => {
    try {
      // Update the book count
      const requestedBook=await bookModel.findOne({_id:req.body.id})
      const updatedBook = await bookModel.findByIdAndUpdate(
        req.body.id,
        { count: requestedBook.count - 1 },
        { new: true } // Return the updated document
      );
  
      // If the book was not found
      if (!updatedBook) {
        return res .json({ success: false, message: "Book not found" });
      }
  
      // Send the updated book as a response
      res.json({ success: true, message: "Book count updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error" });
    }
};

const increaseBookCount=async(req,res)=>{
    try {
        // Update the book count
        const requestedBook=await bookModel.findOne({_id:req.body.id})
        const updatedBook = await bookModel.findByIdAndUpdate(
          req.body.id,
          { count: requestedBook.count + 1 },
          { new: true } // Return the updated document
        );
    
        // If the book was not found
        if (!updatedBook) {
          return res .json({ success: false, message: "Book not found" });
        }
    
        // Send the updated book as a response
        res.json({ success: true, message: "Book count increased" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error" });
      }
}
  

export {addBook,listBooks,deleteBook,updateBookCount,increaseBookCount};