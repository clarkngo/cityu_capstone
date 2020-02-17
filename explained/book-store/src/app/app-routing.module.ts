import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BookFormComponent } from './book-form/book-form.component';

// The second kind of entry component occurs in a route definition.
// All router components must be entry components.
// Because this would require you to add the component in two places (router and entryComponents)
// the Compiler is smart enough to recognize that this is a router definition and
// automatically add the router component into entryComponents.
const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'admin/bookform',
    component: BookFormComponent,
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
