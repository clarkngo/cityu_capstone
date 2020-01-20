# Angular CRUD - Create

![Logo](/07_Angular_Client_Side_Web_Frameworks/images/01_logo.png "Logo")

# System Architecture


# Architecture

## Learning Outcomes

# Client-Side

## Angular




Preparation

1)	Clone the repository if you have not done so:
git clone <repository_url> amazon-apprenti-2019

2)	Open the VS Code and open the amazon-apprenti-2019/CS242/YOURNAME directory

Note: change YOURNAME to your real name. If you do not have the CS242 or YOURNAME folder, please create them under the amazon-apprenti-2019 folder.

3)	Create a Module8 folder under the amazon-apprenti-2019/CS242/YOURNAME directory




Front end (Angular, Angular Material)
From this module, a simple bookstore application will be built for demonstrating how the CRUD (Create, Read, Update, Delete) works.

1)	Open a terminal in the VS Code and navigate to the folder amazon-apprenti-2019/CS242/YOURNAME/Module8. Run the following command to create a new Angular project:
>>> ng new book-store

It will ask you whether you want to add the routing feature to the project. Type “y” to allow the project to add routing functionality.


It will also ask you which format of CSS you would like to use. We will use pure CSS for this hands-on project. Hit the enter key to select CSS.


2)	Install the Angular Material by typing the following command:
>>> npm i --save @angular/material @angular/cdk @angular/animations

3)	Config the animations as well as add other modules will be used to our application. Open the app.module.ts file and update the code as below (the cheat link):


4)	Create a book form component by typing the following command in the terminal:
>>> ng g component book-form

5)	Open the app-routing.module.ts file and update the code as below:


6)	Open the style.css file under the src folder and update the code as below:

Note: Angular Material library includes four pre-built themes you can try to change it to the one you like:
•	deeppurple-amber.css
•	indigo-pink.css
•	pink-bluegrey.css
•	purple-green.css

7)	Open the book-form.component.html file under the book-form folder and update the code as below (the cheat link):


8)	Open the book-form.component.css file under the book-form folder and update the code as below:


9)	Open the book-form.component.ts file and update the code as below (the cheat link):


10)	Open the app.component.html file under the src/app folder and update the code as below:


11)	Open the app.component.css file under the src/app folder and update the code as below:


12)	Create an API service to interact with the backend. Open the terminal in the VS Code and type the following command:
>>> ng g service api

13)	Open the api.service.ts file and update the code as below:


14)	Run the server by typing the following command in the terminal:
>>> ng serve
You are supposed to see a toolbar with a “Add Book” button. An add book form will show up after you click the “Add Book” button under the Manage Products menu:
  
Backend (Node.js, Express, MongoDB)
After we get our frontend part ready, we also need to create a backend to handle the API calls our frontend makes. You will find this process is very similar to what we did for Module 3. We will also use the MongoDB Atlas instance we created in Module 3.

1)	Create a book-store-backend folder under the amazon-apprenti-2019/CS242/YOURNAME/Module8 folder (You should have a book-store and book-store-backend folder under the Module8 folder). Create a package.json file in the book-store-backend folder and copy the content from this link to the file.

2)	Update the tsc script in package.json as below:
"tsc": "tsc && cp ./src/.env ./public"

3)	Create a tsconfig.json file under the book-store-backend folder and copy the content from this link

4)	Open a terminal in the VS Code and navigate to the book-store-backend folder and type the following command to install dependencies:
>>> npm i

5)	Create a src folder under the book-store-backend folder and create an app.ts file under the src folder. Update the code for the app.ts file as below:

Note: this is the entry file that initializes Express, connect to the database as well as set up the router.

6)	Create a “controllers” folder under the src folder and create an add-book.ts file under the “controllers” folder. Update the code for the add-book.ts file as below:

Note: the add-book controller will call the addBook function in the book model and return the corresponding status code to the client-side.

7)	Create a “models” folder under the src folder and create a book.ts file under the “models” folder. Update the code for the book.ts file as below:

Note: the book model defines the schema for data validation and also has addBook function to save the book to the database

8)	Create a .env file under the src folder and update the content as below:

Note: you have to replace the DB_URI with your MongoDB Atlas connection link (You can find it from your Module3’s .env file)

9)	Open the terminal in the VS Code and navigate to the amazon-apprenti-2019/CS242/YOURNAME/Module8/book-store-backend folder and type the following command to compile and run the server:
>>> npm run tsc
>>> cd public
>>> node app.js


10)	Open a new terminal in the VS Code (do not stop the Node server) and navigate to the amazon-apprenti-2019/CS242/YOURNAME/Module8/book-store folder and run the following command:
>>> ng serve
Note: if your dev server is running, skip this step.

11)	Click the “Add Book” button. Fill out the form and click the save button:
For the picture, you can use http://bit.ly/book-DEF or another book image you find


12)	Since we have not implemented the front end code to show the book in the database (we will do it soon), we have to go to the database to check whether our information is saved. Click this link to login your MongoDB Atlas.

13)	Click the cluster name:


14)	Click the Collections menu:


15)	You are supposed to see the data you just submitted:
