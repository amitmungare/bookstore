import express from 'express';

import {
    addNewBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
} from "../controller/bookController.js";

const router = express.Router();

router.post('/addbook',addNewBook)
router.get('/getallbooks',getAllBooks)
router.get('/getbook/:id',getBookById)
router.put('/updatebook/:id',updateBook)
router.delete('/deletebook/:id',deleteBook)


export default router