import mongoose, { Schema, model } from 'mongoose';
import IBook, { IBookModel } from './book.interface';

const publisherSchema = new Schema({
  name: { 
    type: String,
    required: true 
    },

  location: { 
    type: String, 
    required: true 
    },
});

const reviewSchema = new Schema({
  user: { 
    type: String, 
    required: true
 },
  comment: { 
    type: String, 
    required: true },
});

const bookSchema = new Schema<IBook>({
  title: { 
    type: String, 
    required: true
 },
  author: {
     type: [String],
      required: true 
    },
  genre: { 
    type: String, 
    required: true },

  publicationYear: { 
    type: Number,
     required: true 
    },

  publisher: {
     type: publisherSchema, 
     required: true },

  reviews: { 
    type: [reviewSchema],
     required: true },

  rating: { 
    type: Number,
     required: true 
    },

  price: { 
    type: Number,
     required: true 
    },
    featured: { type: String }
});

bookSchema.statics.findFeaturedBooks = function (): Promise<IBook[]> {
    return this.find({ rating: { $gte: 4 } })
      .then((books: IBook[]) => {
        return books.map((book: IBook) => {
          book.featured = book.rating >= 4.5 ? 'BestSeller' : 'Popular';
          return book;
        });
      });
  };
  const BookModel = model<IBook, IBookModel>('Book', bookSchema);

  export default BookModel;


// export default mongoose.model<IBook>('Book', bookSchema);
