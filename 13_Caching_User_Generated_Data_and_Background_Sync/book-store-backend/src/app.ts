import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';

import addBookController from './controllers/add-book';
import fetchBooks from './controllers/fetch-books';
import fetchBook from './controllers/fetch-book';
import updateBookController from './controllers/update-book';
import deleteBookController from './controllers/delete-book';

dotenv.config();

// Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, { useNewUrlParser: true });
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

const app = express();

// Helmet helps you secure your Express apps by setting various HTTP headers
app.use(helmet());

// Set the Access-Control-Allow-Origin to allow our Angular app call the API
// app.use(cors()); // Allow all CORS requests - For development env only)
app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Book Routes
app.post('/books', addBookController);

app.get('/books', fetchBooks);

app.get('/books/:id', fetchBook);

app.put('/books', updateBookController);

app.delete('/books/:id', deleteBookController);

app.listen(process.env.BACKEND_PORT, () => console.log(`The server is running at http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}`));
