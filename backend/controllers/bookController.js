import express from 'express';
import { addBook, deleteBook, listBooks, updateBookCount } from '../routes/bookRoute.js';

const bookRouter=express.Router();

bookRouter.post('/add',addBook);
bookRouter.get('/list',listBooks);
bookRouter.post("/delete",deleteBook);
bookRouter.post('/update-count',updateBookCount);

export default bookRouter;