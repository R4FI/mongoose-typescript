import { Document, Model } from 'mongoose';

interface IPublisher {
  name: string;
  location: string;
}

interface IReview {
  user: string;
  comment: string;
}

interface IBook extends Document {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: IPublisher;
  reviews: IReview[];
  rating: number;
  price: number;
  featured?: string;
}


export interface IBookModel extends Model<IBook> {
    findFeaturedBooks(): Promise<IBook[]>;
  }

export default IBook;

