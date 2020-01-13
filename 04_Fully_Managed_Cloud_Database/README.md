# MongoDB in Local Machine

![Logo](/04_Fully_Managed_Cloud_Database/images/01_logo.png "Logo")

# System Architecture

![Logo](/04_Fully_Managed_Cloud_Database/images/00_mongoose_system.png "Logo")

# Architecture

![MongoDB Architecture](/04_Fully_Managed_Cloud_Database/images/00_mongodb_architecture.png "MongoDB Architecture")

Source: https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/08/MongoDB-Architecture.jpg

## Learning Outcomes
-	Set up a managed MongoDB server with MongoDB Atlas
-	Install Mongoose
-	Create a Mongoose Schema
-	Perform CRUD
-	Perform queries
-	Implement validation


# [Introduction to MongoDB Atlas](https://docs.atlas.mongodb.com/)

MongoDB Atlas is a fully-managed cloud database developed by the same people that build MongoDB. Atlas handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS, Azure, and GCP).

# Preparation

1)	Open a terminal in your local machine and navigate to a place beside your amazon-apprenti-2019 folder
Note: because the code we will clone is from another repository which has the git information. We have to clear it before putting them in your amazon-apprenti-2019 folder.

2)	Run the following command to clone the template repository and clear the git information:
>>> git clone https://github.com/PengWang0316/CS224_Module4_HP.git Module4
>>> cd Module4
>>> rm -fR .git

3)	Copy and paste the Module4 folder to the amazon-apprenti-2019/CS242/YOURNAME directory

4)	Open the VS Code and open the amazon-apprenti-2019/CS242/YOURNAME directory

Note: change YOURNAME to your real name. If you do not have the CS242 or YOURNAME folder, please create them under the amazon-apprenti-2019 folder.

5)	Open a terminal in the VS Code, navigate to the amazon-apprenti-2019/CS242/YOUNAME/Module4 folder and type the following command:
>>> npm i

# Steps

## Set up a managed MongoDB server with MongoDB Atlas
We have already installed the MongoDB server in the EC2 instance in the last module. However, we have to take care of the database all by ourselves such as security, backup, replica, scaling, and so forth. Using a managed service may help a lot. Here we will take a look at how to set up a managed MongoDB server with MongoDB Atlas. You can use it for free with small database instances, which is good for some small projects.

1)	Visit the MongoDB Atlas official website by clicking the following link:
MongoDB Atlas

2)	Click the Start free button or log in button if you have already had an account


3)	Fill out the registration form and click the Get started free button


4)	After login the dashboard, click the Build a Cluster button


5)	Choose the AWS, Oregon and click the Create Cluster button. It may take a litter bit time to create the cluster. Please wait until it is done. You are supposed to see an interface like this:


6)	Click the Database Access link on the left menu and set up a user:


Click the ADD NEW USER button on the right corner:

Fill out the username, password, choose Read and write to any database and click Add User button:


7)	Click on Clusters on the left pane and click on Connect

8)	Click on “Add a Different IP Address” and add 0.0.0.0/0 as your IP Address to allow access from everywhere. This will enable our EC2 instance to connect with MongoDB Atlas.


9)	Go back to the Clusters dashboard and click the CONNECT button:


10)	Choose the Connect Your Application button and click the Copy button:



Note: If you want to use the copy and paste, please keep this information somewhere. We will use it in the next section.

 
## Install and set up Mongoose

1)	Open a terminal in the VS Code and navigate to the amazon-apprenti-2019/CS242/YOUNAME/Module4 folder. Type the following command:
>>> npm i --save mongoose
>>> npm i --save-dev @types/mongoose


2)	Create a .env file under the Module4/src folder and add the following code in the file:

Note: You should copy this URI from the last section. Please change the password with your own password you created in step 6 last section. (don’t include < >)


3)	Open the .gitignore file under the amazon-apprenti-2019 folder and add the following content:

Note: this is a very important step to prevent pushing your database password to GitHub.

4)	Open the app.ts file under the Module4 folder and add some code as below:


5)	If you find errors indicating missing modules, please use this command to import those modules:
npm i --save <module> @types/<module>

Build a model with save and find functions
In the last section, we have already set up the connection between Node.js and MongoDB. Now, we can add models and give some functionality to them.

1)	Open the app.ts file under the Module4 folder and add the following code in the file:


2)	Create a user-form.ejs file under the views folder and copy the content from this link

3)	Create a folder named “models” under src and then create a user.ts file under the models folder and update the code as below:

Note: Cheat link here
One model (User) here represents one collection in MongoDB

4)	Create a new-user-controller.ts file under the controllers folder and update the code as below:


5)	Create a find-user-controller.ts file under the controllers folder and update the code as below:



6)	Open the app.ts file under the Model4 folder and update the code as below:



7)	Open the package.json and update the script tsc as below:

8)	Open the terminal in the VS Code and navigate to the Module4 folder and run the following commands:
>>> mkdir ./public/views
>>> npm run tsc

9)	Navigate to the public folder and run the Node server by running the following command:
>>> cd public
>>> node app.js

10)	Open the browser and visit http://localhost:3000/userForm


11)	Fill out the form and submit


12)	Visit the http://localhost:3000/user?username=user1 to retrieve and show the data from the database

Note: please change the user1 in the URL to the real username you submitted.
