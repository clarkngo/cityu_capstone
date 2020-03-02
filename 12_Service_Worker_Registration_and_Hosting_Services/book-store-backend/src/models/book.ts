import mongoose from 'mongoose';

type BookModel = mongoose.Document & {
    title: string;
    isbn: string;
    author: string;
    picture: string;
    price: number;
};

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
    title: { type: String, required: true },
    isbn: { type: String, required: true },
    author: { type: String, required: true },
    picture: { type: String, required: true },
    price: { type: String, required: true, min: 0 }
});

const Book = mongoose.model<BookModel>('Book', schema);

// Create a new book in the database
export const addBook = (title: string, isbn: string, author: string, picture: string, price: number) => {
    new Book({ title, isbn, author, picture, price }).save();
}

export const fetchBooks = async () => await Book.find({});

export const fetchBook = async (id: string) => await Book.find({ _id: id });

export const updateBook = async (
    id: string, title: string, isbn: string, author: string, picture: string, price: number
) => await Book.findByIdAndUpdate(id, { title, isbn, author, picture, price });

export const deleteBook = async (id: string) => await Book.deleteOne({ _id: id });