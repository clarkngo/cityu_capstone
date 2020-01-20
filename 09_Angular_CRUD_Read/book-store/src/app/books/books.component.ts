import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BookDetailDialogComponent } from '../book-detail-dialog/book-detail-dialog.component';
import { ApiService } from '../api.service';

export interface Book {
  _id: string; title: string; isbn: string; author: string; price: number; picture: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  private books: Array<Book>;
  private booksObject: {
    [id: string]: Book;
  };

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchBooks().subscribe((data: Array<Book>) => {
      this.books = data;
      // Transfer the book array to an object to speed up the look up
      this.booksObject = this.books.reduce((obj, book) => {
        obj[book._id] = book;
        return obj;
      }, {});
    });
  }

  openDialog(id: string): void {
    this.dialog.open(BookDetailDialogComponent, {
      width: '350px',
      data: this.booksObject[id],
    });
  }
}
