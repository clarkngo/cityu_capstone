import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailDialogComponent } from '../book-detail-dialog/book-detail-dialog.component';
import { BackendService } from '../services/backend.service';
import { BookOfflineService } from '../services/book-offline.service';
import { OnlineOfflineService } from '../services/online-offline.service';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface Book {
  _id: string; title: string; isbn: string; author: string; price: number; picture: string, state: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject();
  public books: Array<Book>;
  private booksObject: {
    [id: string]: Book;
  };

  constructor(
    private dialog: MatDialog,
    private backendService: BackendService,
    private bookOfflineService: BookOfflineService,
    private onlineOfflineService: OnlineOfflineService
  ) { }

  ngOnInit() {
    // Load data from cache first
    try {
      this.loadAllDataFromCache();
    } catch (err) {
      console.error(err);
    }
  }

  ngOnDestroy() {
    // Need to tell listeners to stop subscribing to avoid memory leaks
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  // Load data from cache first and then update the cache if internet is available
  async loadAllDataFromCache() {
    this.books = await this.bookOfflineService.fecthAllItemsFromRDb();
    this.booksObject = this.books.reduce((obj, book) => {
      obj[book._id] = book;
      return obj;
    }, {});
    // If an internet connection is available, update the cache in IDb with data from the database server
    if (this.onlineOfflineService.isOnline) {
      this.updateCache();
    }
  }

  // Update the cache in IDb with data from the database server
  updateCache() {
    this.backendService.fetchBooks().pipe(takeUntil(this.destroyed$)).subscribe((data: Array<Book>) => {
      this.books = data;
      // Transfer the book array to an object to speed up the look up
      this.booksObject = this.books.reduce((obj, book) => {
        obj[book._id] = book;
        return obj;
      }, {});
      // Clear cache before updating
      this.bookOfflineService.clearRDb();
      // Update cache
      this.bookOfflineService.bulkAddToRDb(this.books);
    });
  }

  openDialog(id: string): void {
    this.dialog.open(BookDetailDialogComponent, {
      width: '350px',
      data: this.booksObject[id]
    });
  }

  delete(id: string): void {
    // Save the deleted object to IndexedDB
    this.bookOfflineService.saveOffline(
      this.booksObject[id].title, this.booksObject[id].isbn, this.booksObject[id].author,
      this.booksObject[id].picture, this.booksObject[id].price, id, true);
    // Remove the bookd data from internal data sources
    delete this.booksObject[id];
    this.books = this.books.filter((book) => book._id != id);
    this.bookOfflineService.deleteFromRDb(id);
    } catch (err) {
      console.error(err);
  }
}
