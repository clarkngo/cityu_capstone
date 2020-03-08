import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private BACKEND_SERVER_PROTOCOL = environment.backendProtocol;
  private BACKEND_SERVER_IP = environment.backendHost;
  private BACKEND_SERVER_PORT = environment.production === false ? ':' + environment.backendPort : ''; // 8080 for HTTP and 8443 for HTTPS
  private BOOKS_API = this.BACKEND_SERVER_PROTOCOL + this.BACKEND_SERVER_IP + this.BACKEND_SERVER_PORT + '/books';

  constructor(
    private httpClient: HttpClient
  ) { }

  // Book API
  fetchBook(id: string) {
    return this.httpClient.get(`${this.BOOKS_API}/${id}`);
  }

  fetchBooks() {
    return this.httpClient.get(this.BOOKS_API);
  }

  // Add or update the book and expect an HTML response to be returned
  addOrUpdateBook(
    book: { title: string, isbn: string, author: string; picture: string, price: number, _id: null | string }) {
    if (!book._id || book._id === '') {
      return this.httpClient.post(this.BOOKS_API, book, { observe: 'response' });
    } else {
      return this.httpClient.put(this.BOOKS_API, book, { observe: 'response' })
    };
  }

  // Delete the book and expect an HTML response to be returned
  deleteBook(id: string) {
    return this.httpClient.delete(`${this.BOOKS_API}/${id}`, { observe: 'response' });
  }
}
