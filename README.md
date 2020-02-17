# MEAN Stack

Full-stack JavaScript open-source solution. MEAN Stack consist of MongoDB, Express, Angular, and Node.js. The idea is to solve the common issues with connecting those frameworks, build a robust framework to support daily development needs, and help developers use better practices while working with popular JavaScript components.

## Physical View using Deployment Diagram

The deployment diagram shows 3 servers: front-end, back-end, and database. In the front-end, we require the browser as angular applications are browser-based web applications. The back-end server hosts our Node.js with Express on top of Node.js. In Express, we have the application and mongoose on top of it. Express will handle the communication on both front-end and database. The database server only includes a MongoDB. JSON is utilized to communicate across servers.

![](/images/phy_overview.png)

In our first build of MEAN Stack, we’ll be deploying locally using our local machine (localhost) to deploy the front-end server, back-end server, and database server. We’ll be using the default ports of the following: Angular - port 4200, Node.js/Express – port 3000, and MongoDB – port 27017.

![](/images/phy_local.png)
![](/images/phy_local_uml.png)

Moving further to actual production, the first step to migrate to the cloud is our database. For MongoDB, MongoDB Atlas was chosen as the cloud solution.

![](/images/phy_local_cloud.png)
![](/images/phy_local_cloud_uml.png)

The last step to production deployment is uploading our front-end code to Amazon S3 with AWS, uploading the back-end in an EC2 Instance with AWS. They would all communicate to each other with HTTP endpoints.

![](/images/phy_cloud.png)
![](/images/phy_cloud_uml.png)

## Restaurant Analogy
As the main topic is about tackling the steep learning curve, a restaurant analogy is shown to let the user understand and retain the process for the request and response process for the full stack application.

![](/images/analogy_request.png)
![](/images/analogy_response.png)

## Process View using Sequence Diagram

In the process view, the front-end server, back-end server, are shown separately and together with the database server. In the first example, Angular application was deployed with hard-coded JSON in a service.ts file.

![](/images/pro_frontend.png)

The Angular application can communicate to third-party APIs to grab data and display to the user.

![](/images/pro_frontend_api.png)

In our back-end, the Node.js application starts with a hard-coded JSON that can be processed and respond with a JSON as well.

![](/images/pro_backend.png)

This back-end can be connected to third-party APIs or a database server to grab JSON, process, and send back to the requester.

![](/images/pro_backend_database.png)

With the front-end server, back-end server, and database server process explained, the combination of these three are shown below:

![](/images/pro_mean.png)

When an http request is made, the front-end will be triggered an Angular will pick up the request. The request will be passed internally in Angular with Route sending a request for the view to View/Template. View/Template will request the Controller. The Controller will then create a http request to a RESTful (Representational state transfer) endpoint to the Server Side, which is Express/Node.js. The request will then be passed internally with Express/Node.js from its Route to the Controller/Model. The Controller/Model will make a request through the Mongoose ODM to interact with the Database Server that has MongoDB. MongoDB will process the request and respond the callback to Express/Node.js. Express/Node.js sends a JSON response to the Angular Controller. Angular Controller would respond with a view.


## Scenarios using Sequence Diagram

![](/images/sce_book_store.png)

### The scenario described is a user accessing a book store application. When the user enters the URL, JavaScript will be run and will hit the router of the front-end server, which is AppRoutingModule. AppRoutingModule will call the BooksComponent, which will load fetchBooks as its dependency injection. fetchBooks will then create an HTTP request to the back-end server that has a router, controller, and model to process the request and request to the database server. Database server processes the request and with the back-end server waiting, will grab the data and sent it back to the front-end server as a JSON response. The front-end will now have the data and the template view to show to the user.

## Development View using Package Diagram

![](/images/dev_angular.png)

The package view of the Angular application shows that every Angular Component is imported in the AppModule. AppModule and AppRoutingModule is dependent on BooksComponent. The BooksComponent is dependent on BookDetailComponentDialog and ApiService.

![](/images/dev_nodejs.png)

The package view of the Node.js application shows that all CRUD operations (controllers) such as fetch all books, fetch a book, update a book, and delete a book are imported by the app. Also, all the CRUD operations logic resides in the model book.

## Logic View

The book store application only showcased a single class called Book. The class members are: title, isbn, author, picture and price. The methods are: addBook, fetchBooks, fetchBook, updateBook, and deleteBook.

![](/images/log_book.png)

### The model Book’s structure in JSON format.

![](/images/log_book_json.png)
