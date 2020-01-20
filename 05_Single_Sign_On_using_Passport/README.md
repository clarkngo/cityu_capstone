# Single Sign-On using Passport

![Logo](/05_Single_Sign_On_using_Passport/images/01_logo.png "Logo")

# System Architecture

![Logo](/05_Single_Sign_On_using_Passport/images/UPDATE_THIS.png "Logo")

# Architecture


## Learning Outcomes
-	Install Passport package
-	Integrate Passport with Node.js
-	Set up Passport with Facebook strategy

# About Passport

# Preparation

1)	Open a terminal on your local machine and navigate to a place beside your amazon-apprenti-2019 folder
Note: because the code we will clone is from another repository which has the git information. We have to clear it before putting them in your amazon-apprenti-2019 folder.

2)	Run the following command to clone the template repository and clear the git information:
>>> git clone https://github.com/PengWang0316/CS224_Module5_HP.git Module5
>>> cd Module5
>>> rm -fR .git

3)	Copy and paste the Module5 folder to the amazon-apprenti-2019/CS242/YOURNAME directory

4)	Open the VS Code and open the amazon-apprenti-2019/CS242/YOURNAME directory

Note: change YOURNAME to your real name. If you do not have the CS242 or YOURNAME folder, please create them under the amazon-apprenti-2019 folder.

5)	Open a terminal in the VS Code, navigate to the amazon-apprenti-2019/CS242/YOUNAME/Module5 folder and type the following command:
>>> npm i


# Steps

## Integrate Passport with Node.js and set up Facebook login

Passport supports more than 500 different login strategies such as Facebook, Google, Twitter, GitHub, etc. Developers can easily choose and switch them based on the use case. The full supporting list can be found here.

1)	Open a terminal in the VS Code and navigate to the Module5 folder under the amazon-apprenti-2019/CS242/YOUNAME and install the Passport and Passport-Facebook package by typing the following command:
>>> npm i --save passport passport-facebook
>>> npm i --save-dev @types/passport-facebook @types/passport

2)	Open the index.ejs file under the views folder and replace the content with this file


3)	Open the .env file and copy the MongoDB URI we used for the last module to the DB_URI variable:

Note: you can find it from the .env file in the Module4 folder

4)	Open the browser and visit the Facebook Developer page and login


5)	Click the My Apps button and click the Create App button:


6)	Fill out the form and click the Create App ID button:


7)	Click the Set Up button in the Facebook Login card:


8)	Click the Settings link in the left menu and click the Basic link:


9)	Open the .env file under the src folder and Copy the App ID and App Secret from the Facebook developer page to the corresponding variables:


10)	Update the .env file like this:


11)	Open the app.ts file under the src folder and update the code as below:








Continue to add the following content into the app.ts as below:



12)	Create a facebook-login-success.ejs file under the views folder and copy the content from this file

13)	Open package.json and update the script “tsc” as below:

"tsc": "tsc && cp ./src/.env ./public && cp -r ./src/views ./public/views && cp -r ./src/imgs ./public/imgs"



14)	Open the terminal in the VS Code and run the following commands to compile and run the server:
>>> npm run tsc
>>> cd public
>>> node app.js


15)	Open the browser and visit the http://localhost:3000

16)	Click the Sign in with Facebook button and follow the login follow:



17)	You are supposed to see your id and username from Facebook after login successfully:

 
