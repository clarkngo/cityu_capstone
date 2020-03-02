import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from '../services/backend.service';

import { Book } from '../books/books.component';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  public bookId: string;
  public title: string = '';
  public isbn: string = '';
  public author: string = '';
  public picture: string = '';
  public price: number = 0;
  static URL_REGEXP = /^http(s*):\/\/.+/;
  static BOOKS_PAGE = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private backendService: BackendService,
  ) { }

  ngOnInit() {
    // Get the url pramater
    this.bookId = this.route.snapshot.paramMap.get('id');
    // Load the book data from the database if a book id is passed
    if (this.bookId) this.backendService.fetchBook(this.bookId).subscribe((data: Book[]) => {
      if (data.length !== 0 ) {
        this.title = data[0].title;
        this.isbn = data[0].isbn;
        this.author = data[0].author;
        this.price = data[0].price;
        this.picture = data[0].picture;
      } else this.bookId = null;  
    });
  }

  handleSave() {
    let message: string;
    // Validate the form data before saving the data
    if (this.title.trim() === '' || this.isbn.trim() === '' || this.author.trim() === '')
      message = 'Please finish the form.';
    else if (!BookFormComponent.URL_REGEXP.test(this.picture))
      message = 'The picture should be start with http:// or https://';
    else if (this.price <= 0)
      message = 'Price should be greater than 0.'
    else {
      // Call the add book API and reset all form input vaules
      message = 'Operation successful';
      this.backendService.addOrUpdateBook({
        title: this.title, isbn: this.isbn, author: this.author,
        picture: this.picture, price: this.price, _id: this.bookId,
      }).subscribe(() => {
        this.title = '';
        this.isbn = '';
        this.author = '';
        this.picture = '';
        this.price = 0;
        this.bookId = null;
        this.router.navigate([BookFormComponent.BOOKS_PAGE]);
      });
    }
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }
}