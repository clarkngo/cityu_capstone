# MEAN Stack

![](/images/logo1.png)

MEAN Stack is a full-stack JavaScript open-source solution. MEAN Stack consist of MongoDB, Express, Angular, and Node.js. The idea is to solve the common issues with connecting those frameworks, build a robust framework to support daily development needs, and help developers use better practices while working with popular JavaScript components.

## Back-end with Node.js
Node.js is built for handling asynchronous I/O while JavaScript is has a event loop built-in for the client-side that makes Node.js fast in performance compared to other environments. However, the event-driven/callback approach makes Node.js difficult to debug and learn as well.

Node.js includes modules such as mongoose, which is a MongoDB object modeling, and express web application framework. Through node modules, abstraction can be achieved, which reduces the overall complexity of the MEAN stack.

## Back-end with Express Framework
Express is a minimalist and unopinionated application framework for Node.js. It is a layer on top of Node.js that is feature-rich for web and mobile development without hiding any Node.js functionalities.

## Front-end with Angular
Angular is a web development platform built in TypeScript that provides developers with robust tools for creating the client side of web applications. It allows development of single-page web applications where content changes dynamically based on user behavior and preferences. It features dependency injections to ensure whenever a component is changed, other components related to it will be changed automatically.

## Database with MongoDB
MongoDB is a NoSQL database which stores data in BJSON (Binary JavaScript Object Notation). MongoDB became the de facto standard database for Node.js applications to fulfill the JavaScript everywhere using JSON (JavaScript Object Notation) to transmit data across different tiers (front-end, back-end, and database).

## Physical View using Deployment Diagram
Who uses or what it shows:
- System engineer
- Topology
- Communications

### Video Demo
[![MEAN Stack Physical View using Deployment Diagram](http://img.youtube.com/vi/hPNziXpjf7E/0.jpg)](https://www.youtube.com/watch?v=hPNziXpjf7E "MEAN Stack Physical View using Deployment Diagram")

The deployment diagram shows 3 servers: front-end, back-end, and database. In the front-end, we require the browser as angular applications are browser-based web applications. The back-end server hosts our Node.js with Express on top of Node.js. In Express, we have the application and mongoose on top of it. Express will handle the communication on both front-end and database. The database server only includes a MongoDB. JSON is utilized to communicate across servers.

![](/images/phy_overview.png)

In our first build of MEAN Stack, we’ll be deploying locally using our local machine (localhost) to deploy the front-end server, back-end server, and database server. We’ll be using the default ports of the following: Angular - port 4200, Node.js/Express – port 3000, and MongoDB – port 27017.

The diagram below shows the full stack web application in UML notation.

![](/images/phy_local_uml.png)

Moving further to actual production, the first step to migrate to the cloud is our database. For MongoDB, MongoDB Atlas was chosen as the cloud solution.

![](/images/phy_local_cloud_uml.png)

The last step to production deployment is uploading our front-end code to Amazon S3 with AWS, uploading the back-end in an EC2 Instance with AWS. They would all communicate to each other with HTTP / HTTPS endpoints.

![](/images/phy_cloud_uml.png)

Here's another diagram to show our production deployment without using UML notation.

![](/images/phy_cloud.png)

## Restaurant Analogy
As the main topic is about tackling the steep learning curve, a restaurant analogy is shown to let the user understand and retain the process for the request and response process for the full stack application.

The customer (end-user) requests his order through the waiter (controller) and the waiter hands over the request to the person at the order window (service factory). These three components makes up the front-end server. The service factory will be the one to communicate with the cook (controller) in the back-end. The cook will then grab the necessary ingredients (data) in the fridge (database server).

![](/images/analogy_request.png)

The fridge will be able to provide the necessary material (data) to the cook in the back-end. The cook can now process that data and send back to the service factory of the front-end. The controller (waiter) will hand-over the prepared meal to the customer (user). The customer will now be able to consume the meal (data).

![](/images/analogy_response.png)

## Process View using Sequence Diagram
Who uses or what it shows:
- Integrators
- Performance
- Scalability

### Video Demo
[![MEAN Stack Process View using Sequence Diagram](http://img.youtube.com/vi/Kr0-S-12mAI/0.jpg)](https://www.youtube.com/watch?v=Kr0-S-12mAI "MEAN Stack Process View using Sequence Diagram")

In the process view, the front-end server and back-end server are first shown separately then connect them together with the database server. In the first example, Angular application was deployed with hard-coded JSON in a service.ts file (located in the Service Factory).

![](/images/pro_frontend.png)

The Angular application can communicate to third-party APIs to obtain data and display to the user.

![](/images/pro_frontend_api.png)

In our back-end, the Node.js application example starts with a hard-coded JSON that can be processed and use as a response.

![](/images/pro_backend.png)

This back-end can be connected to third-party APIs or a database server to obtain JSON, process, and send back to the requester.

![](/images/pro_backend_database.png)

With the front-end server, back-end server, and database server process explained, the combination of these three servers are shown below:

![](/images/pro_mean.png)

When an http request is made, the front-end will be triggered and Angular will pick up the request. The request will be passed internally in Angular with Route sending a request for the view to View/Template. View/Template will request the Controller. The Controller will then create a http request to a RESTful (Representational state transfer) endpoint to the Server Side, which is Express/Node.js. The request will then be passed internally with Express/Node.js from its Route to the Controller/Model. The Controller/Model will make a request through the Mongoose ODM to interact with the Database Server that has MongoDB. MongoDB will process the request and respond the callback to Express/Node.js. Express/Node.js sends a JSON response to the Angular Controller. Angular Controller would respond with a view.


## Scenario View using Sequence Diagram
Who uses or what it shows:
- Describe interactions between objects and between processes

### Video Demo
[![MEAN Stack Scenario View using Sequence Diagram](http://img.youtube.com/vi/oUaO7m_QnVI/0.jpg)](https://www.youtube.com/watch?v=oUaO7m_QnVI "MEAN Stack Scenario View using Sequence Diagram")

![](/images/sce_book_store.png)

The scenario described is a user accessing a book store application. When the user enters the URL, JavaScript will be run and will hit the router of the front-end server, which is AppRoutingModule. AppRoutingModule will call the BooksComponent, which will load fetchBooks as its dependency injection. fetchBooks will then create an HTTP request to the back-end server that has a router, controller, and model to process the request and query the database server. Database server  processes the query and with the back-end server waiting, will grab the data and sent it back to the front-end server as a JSON response. The front-end will now have the data and the template view to show to the user.

## Development View using Package Diagram
Who uses or what it shows:
- Programmers
- Software Management

### Video Demo
[![MEAN Stack Development View using Package Diagram](http://img.youtube.com/vi/bUCV8UqvYis/0.jpg)](https://www.youtube.com/watch?v=bUCV8UqvYis "MEAN Stack Development View using Package Diagram")

The package view of the Angular application shows that every Angular Component is imported in the AppModule. AppModule and AppRoutingModule is dependent on BooksComponent. The BooksComponent is dependent on BookDetailComponentDialog and ApiService.

![](/images/dev_angular.png)

The package view of the Node.js application shows that all CRUD operations (controllers) such as fetch all books, fetch a book, update a book, and delete a book are imported by the app. Also, all the CRUD operations logic resides in the model book.

![](/images/dev_nodejs.png)

## Logical View using Class Diagram
Who uses or what it shows:
- End-user
- Functionality

### Video Demo
[![MEAN Stack Logical View using Class Diagram](http://img.youtube.com/vi/BKDw3YMxPC4/0.jpg)](https://www.youtube.com/watch?v=BKDw3YMxPC4 "MEAN Stack Logical View using Class Diagram")

The book store application only showcased a single class called Book. The class members are: title, isbn, author, picture and price. The methods are: addBook, fetchBooks, fetchBook, updateBook, and deleteBook.

![](/images/log_book.png)

The model Book’s structure in JSON format.

![](/images/log_book_json.png)
