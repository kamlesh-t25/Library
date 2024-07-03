import express from 'express';
import { addBook, deleteBook, increaseBookCount, listBooks, updateBookCount } from '../routes/bookRoute.js';

const bookRouter=express.Router();

bookRouter.post('/add',addBook);
bookRouter.get('/list',listBooks);
bookRouter.post("/delete",deleteBook);
bookRouter.post('/update-count',updateBookCount);
bookRouter.post('/increaseCount',increaseBookCount);

export default bookRouter;