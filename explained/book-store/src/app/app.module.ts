import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksComponent } from './books/books.component';
import { BookDetailDialogComponent } from './book-detail-dialog/book-detail-dialog.component';

// decorator function that takes a single metadata object whose properties describe the module.
@NgModule({
  // the view classes that belong to this module.
  // Angular has three kinds of view classes: components, directives, and pipes.
  declarations: [
    AppComponent,
    BookFormComponent,
    BooksComponent,
    BookDetailDialogComponent,
  ],
  // The entryComponents array is used to define only components that
  //   are not found in html and created dynamically with ComponentFactoryResolver.
  //   Angular needs this hint to find them and compile.
  //   All other components should just be listed in the declarations array.
  entryComponents: [
    BookDetailDialogComponent,
  ],
  // other modules whose exported classes are needed by component templates
  //   declared in this module.
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
  ],

  // creators of services that this module contributes to
  //   the global collection of services;
  //   they become accessible in all parts of the app.
  providers: [],

  // An entry component is any component that Angular loads imperatively,
  //   (which means you’re not referencing it in the template), by type.
  //   You specify an entry component by bootstrapping it in an NgModule, or including it in a routing definition.

  // To contrast the two types of components, there are components which are included in the template,
  //   which are declarative. Additionally, there are components which you load imperatively; that is, entry components.
  //   the main application view, called the root component, that hosts all other app views.
  //   Only the root module should set this bootstrap property.

  // A bootstrapped component is an entry component that
  //   Angular loads into the DOM during the bootstrap process (application launch).
  //   Other entry components are loaded dynamically by other means, such as with the router.

  // There are two main kinds of entry components:
  //   The bootstrapped root component.
  //   A component you specify in a route definition.
  bootstrap: [AppComponent]


// Why list the same component in multiple NgModule properties?

// AppComponent is often listed in both declarations and bootstrap. You might see the same component listed in declarations, exports, and entryComponents.
// While that seems redundant, these properties have different functions. Membership in one list doesn't imply membership in another list.
//   AppComponent could be declared in this module but not bootstrapped.
//   AppComponent could be bootstrapped in this module but declared in a different feature module.
//   A component could be imported from another app module (so you can't declare it) and re-exported by this module.
//   A component could be exported for inclusion in an external component's template as well as dynamically loaded in a pop-up dialog.

})
export class AppModule { }
