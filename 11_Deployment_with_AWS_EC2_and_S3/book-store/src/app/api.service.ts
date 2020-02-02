import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_BOOK_API = 'http://ec2-3-80-210-106.compute-1.amazonaws.com:4000/book';
  private FETCH_BOOKS_API = 'http://ec2-3-80-210-106.compute-1.amazonaws.com:4000/books';
  private FETCH_BOOK_API = 'http://ec2-3-80-210-106.compute-1.amazonaws.com:4000/book';
  private UPDATE_BOOK_API = this.ADD_NEW_BOOK_API;
  private DELETE_BOOK_API = this.ADD_NEW_BOOK_API;

  constructor(private httpClient: HttpClient) { }

  fetchBook(id: string) {
    return this.httpClient.get(`${this.FETCH_BOOK_API}/${id}`);
  }

  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }

  addNewBook(book: {title: string; isbn: string; author: string; picture: string, price: number }) {
    return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
  }

  addOrUpdateBook(
    book: { title: string; isbn: string; author: string; picture: string; price: number, _id: null | string }) {
      if (!book._id || book._id === '') return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
      return this.httpClient.put(this.UPDATE_BOOK_API, book);
  }

  deleteBook(id: string) {
    return this.httpClient.delete(`${this.DELETE_BOOK_API}/${id}`);
  }
}
