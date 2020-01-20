# Angular Client-Side Web Framework

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

3)	Create a Module7 folder under the amazon-apprenti-2019/CS242/YOURNAME directory




Angular8
Angular is a TypeScript (JavaScript) framework that is developed by Google. It can help developers to write more robust, maintainable, and scalable front-end code.

1)	Before we start to write any code for an Angular project, we should install the Angular CLI tool to help us to speed up the development process. Install it by opening a terminal in the VS Code and running the following command:
>>> npm i -g @angular/cli

2)	Navigate to Module7 and run the following command to create a new Angular project:
>>> ng new angular-app

It will ask you whether you want to add the routing feature to the project. Type “y” to allow the project to add routing functionality.


It will also ask you which format of CSS you would like to use. We will use pure CSS for this hands-on project. Hit the enter key to select CSS.


3)	Run the Angular server by typing the following command in the terminal:
>>> ng serve
Open the http://localhost:4200 to view the page:


4)	Let’s take a look at what the file structure looks like for an Angular app:


5)	Let’s create a new products component by typing the following command in the terminal:
>>> ng g component products

6)	Open the app-routing.module file under the app folder and add one router as below:


7)	Open the app.component.html and update the code as below:


8)	Open the products.component.ts file under the products folder and update the code as below:


9)	Open the products.component.html file and update the code as below:


10)	Open the products.component.css file and update the code as below:


11)	We can see the product shows in the browser as:
Open the http://localhost:4200/products to view the page:


12)	Now let take a look at the products folder to understand what the file structure for a component:


13)	We will add one more component and see how to switch between different components. Open the terminal and run the following command:
>>> ng g component customers

14)	Open the app-routing.module.ts file and update the code as below:


15)	Open the app.component.html file and update the code as below:


16)	Open the app.component.css file and update the code as below:


17)	Open the customers.component.ts file and update the code as below:


18)	Open the customers.component.html file and update the code as below:

Note: we use the *ngIf and else to hide the email address we do not want to show.

19)	Open the customers.component.css file and update the code as below:


20)	Open the browser and visit http://localhost:4200 to see the final result
