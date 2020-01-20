# Client-Side Web Frameworks

![Logo](/06_Client_Side_Web_Frameworks/images/01_logo.png "Logo")

# System Architecture

![Logo](/05_Single_Sign_On_using_Passport/images/UPDATE_THIS.png "Logo")

# Architecture

![MongoDB Architecture](/05_Single_Sign_On_using_Passport/images/UPDATE_THIS.png "MongoDB Architecture")

## Learning Outcomes
-	Install Passport package
-	Integrate Passport with Node.js
-	Set up Passport with Facebook strategy

# Client-Side

## Vue

## React


Preparation

1)	Clone the repository if you have not done so:
git clone <repository_url> amazon-apprenti-2019

2)	Open the VS Code and open the amazon-apprenti-2019/CS242/YOURNAME directory

Note: change YOURNAME to your real name. If you do not have the CS242 or YOURNAME folder, please create them under the amazon-apprenti-2019 folder.

3)	Create a Module6 folder under the amazon-apprenti-2019/CS242/YOURNAME directory





React
React is one of the most popular front-end libraries that can help developers to build high-performance Single Page Applications (SPA).

1)	Facebook offers a very convenient tool that is called create-react-app to help developers establish a React working environment with just one command. We will use it to initialize our React app. Open a terminal in the VS Code and navigate to the amazon-apprenti-2019/CS242/YOURNAME /Module6 folder. Run the following command to set up a template for the react app:
>>> npx create-react-app react-app --typescript

Note: if you get permission denied error, please try the following command:
>>> sudo npx create-react-app react-app --typescript

2)	Now let’s open the react-app folder and take a look at the initial file structure the create-react-app created for us:


3)	The create-react-app has already set up everything for us and you can run the React app by navigating to the react-app folder (cd react-app) and typing the following command:
>>> npm start

Note: You will see something like this. It is your first React app. Easy right?

4)	Let’s modify the App component. Open the App.tsx file and update it as below:

Note: React uses JSX syntax which is a template language that is very similar to HTML. You can see from the code above, it is really not too different from HTML.
You may notice, the page in your browser automatically updated as soon as you save the file. React is using a hot-loader to help developers can see the update easier.

5)	As you can see, after we update the HTML content in the component file, the new image is still spinning. Let’s change it by editing the component’s CSS file. Open the App.css file and update it as below:

Note: after you save the file, you can see the change from the browser right away.

6)	The React library uses the component concept. The App file we just edit is one of the components. We can compose different components together to make our app works.

7)	Press Ctrl+C to terminate the React server.


 
Vue
Vue.js is another popular JavaScript front-end framework. According to the Vue Of ficial website, its core library is focused on the view layer only and also has the ability to build SPA with other supporting libraries.

1)	Open the terminal in the VS Code and install the Vue CLI globally by typing the following command:
>>> npm i -g @vue/cli

2)	Make sure you are under the amazon-apprenti-2019/CS242/YOURNAME/Module6 folder and type the following command to create a new Vue project:
>>> vue create vue-app

Hit the enter key to choose the first option.

3)	Open the vue-app folder and check the file structure:


4)	Install the VS Code plugin () to help view the Vue file. Open the View menu in the VS Code and click the Extensions in the menu:


Type vetur in the search input and click the Install button in the right panel:


5)	Open the terminal in the VS Code and navigate to the vue-app folder (cd vue-app) and run the dev server by typing the following command:
>>> npm run serve
Open the http://localhost:8080 in your browser to view the default page


6)	Open the App.vue file to check the file structure:


7)	Let’s change the msg prop and see how it affect the HelloWorld component. Update the App.vue file as below:

Note: when you hit the save, the browser will update the view for you automatically.

8)	Open the HelloWorld.vue file under the components folder to check how a component can use the prop message that is passed by its parent:
In the template part, use the {{ prop name }} syntax to place the message

In the JavaScript part, define the props name and type:
