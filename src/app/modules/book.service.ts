import { FilterQuery } from "mongoose";
import IBook from "./book.interface";
import BookModel from "./book.model";

export const createBookToDB = async (payload: IBook): Promise<IBook> => {
    // creating a new book
    const book = new BookModel(payload); 
    await book.save();
    return book;
  };


  export const getBooksFromDB = async (query: FilterQuery<IBook>={}): Promise<IBook[]> => {
    const books = await BookModel.find(query);
    return books;
  };

  export const getSellerTypeFromDB = async (): Promise<IBook[]> => {
    const books = await BookModel.findFeaturedBooks();
    return books;
  };

  export const updatePrice = async (publicationYear: number): Promise<void> => {
     await BookModel.updateMany( { publicationYear: { $gt: publicationYear }, price: { $type: 'string' } },
   [{ $set: { price: { $toInt: '$price' } } }],
   { multi: true })
  };


  
  export const getByGnrePublisher = async (
    genre: string,publisher:string
  ): Promise<IBook[]> => {
    const book = await BookModel.find({genre,"publisher.name":publisher});
    return book;
  };

