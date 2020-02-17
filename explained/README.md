# Angular CRUD - Update and Delete

![Logo](/10_Angular_CRUD_Update_and_Delete/images/01_logo.png "Logo")

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

3)	You should already have the amazon-apprenti-2019/CS242/YOURNAME/Module8/book-store and amazon-apprenti-2019/CS242/YOURNAME/Module8/book-store-backend directories (we created them in the HP08. If you do not have them, come back to this HP after you finish the HP08 and HP09)


Front end (Angular, Angular Material)
In this module, we will keep working on our bookstore to add update and delete functionality.

1)	Open the book-form.component.ts file and update the content as below (the cheat link):


Note: we added the code to load the book information if a book id is supplied in the ngOnInit function. Also, we changed to the API addNewBook to addOrUpdateBook when the handleSave function is called.

2)	Open the books.component.html file and update the content as below:

Note: we added “edit” and “delete” buttons for each book.

3)	Open the books.component.ts file and add the delete function as below:

Note: the delete function calls the deleteBook API from service and also remove the book data from the component’s data in order to update the view.

4)	Open the api.service.ts file and update the content as below:

Note: here is the place that we make the real HTTP request.



 
Backend (Node.js, Express, MongoDB)
Now is the time to move to the backend. Let’s add code to handle the API request our frontend make.
We will start to work under the amazon-apprenti-2019/CS242/YOURNAME/Module8/book-store-backend folder.

1)	Open the book.ts file under the models folder and add fetchBook, updateBook, and deleteBook functions as below:


2)	Create a delete-book.ts file under the controllers folder and update the content as below:


3)	Create a fetch-book.ts file and update the content as below:


4)	Create an update-book.ts file and update the content as below:


5)	Open the app.ts file and update the content as below:


Note: We set `useFindAndModify' to false to make Mongoose use `findOneAndUpdate()`. Note that this option is `true` by default, you need to set it to false.

6)	Open another terminal in the VS Code and navigate to the amazon-apprenti-2019/CS242/YOURNAME/Module8/book-store-backend folder and type the following command to compile and run the server:
>>> npm run tsc
>>> cd public
>>> node app.js


7)	Open a new terminal in the VS Code (do not stop the Node server) and navigate to the amazon-apprenti-2019/CS242/YOURNAME/Module8/book-store folder and run the following command:
>>> ng serve
Note: if your dev server is running, skip this step.

8)	Open the http://localhost:4200 in your browser and try the edit and delete functionalities:
