import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'admin/bookform/:id',
    component: BookFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
