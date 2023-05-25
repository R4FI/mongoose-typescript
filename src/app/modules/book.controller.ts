import { NextFunction, Request, Response, query } from "express";
import { createBookToDB,  getBooksFromDB, getByGnrePublisher, getSellerTypeFromDB, updatePrice } from "./book.service";

export const createBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const data = req.body;
  
    const book = await createBookToDB(data);
  
    res.status(200).json({
      status: "success",
      data: book,
    });
  };


  export const getBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
        const query = req.query
        const genre = await getBooksFromDB(query);
    res.status(200).json({
      status: "success",
      data: genre,
    });
  };



  export const getBooksBySeller =  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const featuredBooks = await  getSellerTypeFromDB();
        res.status(200).json({
          status: 'success',
          data: featuredBooks,
        });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
  };
  export const updateBookPrice =  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const publicationYear: number = 2020;

        const updatedPrice =   await updatePrice(publicationYear);
    //    =await updatePrice();
    
        res.status(200).json({
          status: 'success',
          message:"price updated Sucessfully",
        
        });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error', message:error.message });
      }
  };


  export const getBooksGenrePublisher = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const  genre  = 'Sci-Fi';;
    const publisher = 'Roli Books';
    const bookGnrePublisher = await getByGnrePublisher(genre,publisher);
  
    res.status(200).json({
      status: "success",
      data: bookGnrePublisher,
    });
  };