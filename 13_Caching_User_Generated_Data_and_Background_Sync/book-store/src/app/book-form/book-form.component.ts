import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookOfflineService } from '../services/book-offline.service';
import { filter, takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { OnlineOfflineService } from '../services/online-offline.service';
import { BackendService } from '../services/backend.service';
import { Book } from '../books/books.component';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject();
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
    private snackBar: MatSnackBar,
    private bookOfflineService: BookOfflineService,
    private onlineOfflineService: OnlineOfflineService,
    private backendService: BackendService
  ) { }

  ngOnInit() {
    // Get the url pramater
    this.bookId = this.route.snapshot.paramMap.get('id');
    if (this.onlineOfflineService.isOnline) {
      // Load the book data from the local database if a book id is passed
      if (this.bookId) this.backendService.fetchBook(this.bookId)
        .pipe(takeUntil(this.destroyed$)).subscribe((data: Book[]) => {
          // Book exists
          if (data.length !== 0) {
            this.title = data[0].title;
            this.isbn = data[0].isbn;
            this.author = data[0].author;
            this.price = data[0].price;
            this.picture = data[0].picture;
          } else {
            this.bookId = null;
            // Show an error message and navigate back to the main page
            this.snackBar.open("The book does not exist", 'Close', { duration: 2000 });
            this.router.navigate([BookFormComponent.BOOKS_PAGE]);
          }
        });
    } else {
      // Load the book data from the local database if a book id is passed
      if (this.bookId) this.bookOfflineService.fecthSingleItemFromRDb(this.bookId).then((book) => {
        if (book) {
          this.title = book.title;
          this.isbn = book.isbn;
          this.author = book.author;
          this.price = book.price;
          this.picture = book.picture;
        } else {
          this.bookId = null;
          // Show an error message and navigate back to the main page
          this.snackBar.open("The book does not exist", 'Close', { duration: 2000 });
          this.router.navigate([BookFormComponent.BOOKS_PAGE]);
        }
      },
        (error) => console.error(error));
    }
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
      message = 'Operation sccuessful';
      // Save data locally
      try {
        this.saveOffline();
      } catch (err) {
        console.error(err);
      }
    }
    this.snackBar.open(message, 'Close', { duration: 2000 });
  }

  async saveOffline() {
    // Only clear form and navigate to the main page when the change has been saved and/or synced
    this.bookOfflineService.saveCompleteStatus
      .pipe(filter(value => value == this.bookId || value == true), takeUntil(this.destroyed$))
      .subscribe(() => {
        this.clearForm();
      });
    // Save the change to the CUDBooks instance and try to sync the instance with the remote server
    await this.bookOfflineService.saveOffline(
      this.title, this.isbn, this.author, this.picture, this.price, this.bookId, false);
  }

  clearForm() {
    this.title = '';
    this.isbn = '';
    this.author = '';
    this.picture = '';
    this.price = 0;
    this.bookId = null;
    this.router.navigate([BookFormComponent.BOOKS_PAGE]);
  }
}
