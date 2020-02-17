// Application starts with main.ts file

// @angular/core
// Implements Angular's core functionalities, low-level services, and utilities
// Defines the class infrastructure for components, view hierarchies, change detection, rendering, and event handling.
// Defines the decorators that supply metadata and context for Angular constructs.
// Defines infrastructure for dependency injection (DI), internationalization (i18n), and various testing and debugging facilities
import { enableProdMode } from '@angular/core';

// platform-browser contains code shared for browser execution (DOM thread, WebWorker)
// platform-browser-dynamic contains the client side code that processes templates (bindings, components, ...) and reflective dependency injection
// We can change the title of the page dynamically.
// Its used to set,get,update browser meta data's
// Also we can disable or enable browser debugging tool with the help of functions available in this package
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode(); // Disable Angular's development mode, which turns off assertions and other checks within the framework.
}

// The example below shows how we will bootstrap AppModule using the browser platform.
//   Again, by convention, we name the AppModule file app.module.ts.
//   This uses the Just in Time (JIT) compilation.
//   JIT (also dynamic translation or run-time compilations) is a way of executing computer code that
//     involves compilation during execution of a program – at run time – rather than before execution.
// boostrapModule() creates an instance of an @NgModule for a given platform using the given runtime compile
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
