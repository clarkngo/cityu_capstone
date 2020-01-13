# Node and NPM

![Logo](/02_Express_and_MVC/images/01_logo.png "Logo")

## Learning Outcomes

-	Installing the Express Package and Setting up the Environment for TypeScript
-	Creating an Express Version Server
-	Building Model-View-Controller (MVC) Architecture - Controllers
-	Writing Middleware for use in Express Apps
-	Building Views with an Embedded JavaScript (EJS) Template Engine


## Prerequisites
[01_Node_and_NPM](https://github.com/clarkngo/cityu_capstone/tree/master/01_Node_and_NPM)

# Architecture

# [Introduction to Express Framework](https://expressjs.com/en/guide/using-middleware.html)

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

-	Execute any code.
-	Make changes to the request and the response objects.
-	End the request-response cycle.
-	Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

-	Application-level middleware
-	Router-level middleware
-	Error-handling middleware
-	Built-in middleware
-	Third-party middleware

You can load application-level and router-level middleware with an optional mount path. You can also load a series of middleware functions together, which creates a sub-stack of the middleware system at a mount point.

# Steps
1) Create an empty project folder.

2)	Type the following command in the terminal to initialize a Node project:
>>> npm init -y



3)	Type the following command in the terminal to install the Express package and type definitions for Express:
>>> npm i --save express @types/express



4)	Setup the TypeScript for your project by opening the terminal and typing:

>>> npm i --save-dev typescript
>>> tsc --init



Note: In step 3, we installed dependencies that are modules required at runtime. In step 4, we installed devDependencies that are modules required during development To save a dependency as a devDependency on installation we need to do an npm install --save-dev, instead of just an npm install --save.



5)	Create a tsconfig.json file under the Module2 folder and update it as below: Click here to download the code


Creating an Express Version Server
6)	Create an Express version of server by creating a src folder and create an app.ts file under the src folder:


7)	Open the app.ts file and update the content as below:



Note: Refers to this website for more information on the usage of the get function.

8)	Compile the TypeScript code to the JavaScript code by typing the following command in the VS Code’s terminal:
>>> tsc
You will see a public folder and app.js file shows up under the your Module2 folder


9)	Run the server by typing the following command in the terminal:
>>> node public/app.js


Click the URL shows above to see the result in your browser

Hit the control + c key in the terminal to stop the server.

 
Building Model-View-Controller (MVC) Architecture - Controllers
10)	Added a controller to the project by create a controllers folder under the src folder and create an order-controller.ts file under the controllers folder:


11)	Open the file and update the content as below:


12)	Open the app.ts file under the src folder and update the content as below:


 
13)	Open the terminal and run the Node server by typing the following command:
>>> tsc
>>> node public/app.js



14)	Go to your browser and visit http://localhost:3000/order

 
Writing Middleware for Use in Express Apps
15)	Create a middlewares folder under the src folder and create a logging.ts file under the middlewares folder


16)	Update the file content as below:



Notice the call above to next(). Calling this function invokes the next middleware function in the app. The next() function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function. The next() function could be named anything, but by convention it is always named “next”. To avoid confusion, always use this convention.

17)	Open the app.ts file under the src folder and add the logging middleware in:


18)	Compile the TypeScript code and run the Node server again by typing the following command in the terminal:
>>> tsc
>>> node public/app.js

19)	Open your browser and visit http://localhost:3000/order

20)	Check the information in the terminal:

Note: you can see the code in the logging middleware run before and after the controller.
Hit the control + c key to quit the server.
 
Building Views with an Embedded JavaScript (EJS) Template Engine
There are many view engines out there can be chosen such as Pug, EJS, Mustache, Handlebars, etc. Here we are going to try the EJS.

21)	Open the VS Code’s terminal and type the following command:
>>> npm i --save ejs


22)	Create a views folder under the src folder and create an index.ejs file under it:


23)	Update the content for the index.ejs file as below: or click here and copy :)

Note: we use two placeholders here and they will be replaced by data that the server sends back.

 
24)	Open the app.ts file under the src folder and update the content as below:


Note: please pay attention to the line 13 to 16. We pass the string “index” as the first parameter for the template file name (in this case, the index.ejs file will be used) and pass an object with the information will be used to replace the placeholder in the template file.

25)	Open the package.json file under the Module2 folder an add one script in as below:



26)	Type the following commands in the terminal:
>>> tsc
>>> npm run copyViews
(In Windows, you need to switch your terminal shell in VSCode to GitBash; otherwise, a manual copy is required. Copy the src/views directory to the public directory.)
>>> cd public
>>> node app.js

27)	Open the browser and visit

