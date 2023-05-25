import express from "express";
import { createBook, getBooks, getBooksBySeller, getBooksGenrePublisher, updateBookPrice } from "./book.controller";
const router = express.Router();


router.post('/create-book', createBook)
router.get('/',getBooks)
router.get('/seller',getBooksBySeller)
router.put('/price-update/:publicationYear', updateBookPrice)
router.get('/:genre/:publisher',getBooksGenrePublisher)




export default router;