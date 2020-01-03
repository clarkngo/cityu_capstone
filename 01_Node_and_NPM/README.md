# Node and NPM

![Logo](/01_Node_and_NPM/images/01_logo.png "Logo")

## Learning Outcomes

- Installing the Node.js and NPM
- Configuring the package.json
- Creating your first server-side web application
- Adding the routing functionality

## Prerequisites
### Main JavaScript concepts
- Lexical Structure
- Expressions
- Types
- Variables
- Functions
- this
- Arrow Functions
- Loops
- Scopes
- Arrays
- Template Literals
- Semicolons
- Strict Mode
- ECMAScript 6, 2016, 2017
### Asynchronous programming and callbacks
- Asynchronous programming and callbacks
- Timers
- Promises
- Async and Await
- Closures
- The Event Loop

# Architecture

![Node.js Architecture](/01_Node_and_NPM/images/00_nodejs_architecture.png "Node.js Architecture")

Source: https://stackoverflow.com/questions/36766696/which-is-correct-node-js-architecture

The node.js project began in 2009 as a JavaScript environment decoupled from the browser. Using Google’s V8 and Marc Lehmann’s libev, node.js combined a model of I/O – evented – with a language that was well suited to the style of programming; due to the way it had been shaped by browsers. As node.js grew in popularity, it was important to make it work on Windows, but libev ran only on Unix. The Windows equivalent of kernel event notification mechanisms like kqueue or (e)poll is IOCP. libuv was an abstraction around libev or IOCP depending on the platform, providing users an API based on libev. In the node-v0.9.0 version of libuv libev was removed.

Source: https://nikhilm.github.io/uvbook/introduction.html#background

![Node.js System](/01_Node_and_NPM/images/00_nodejs_system.jpg "Node.js System")

Source: https://twitter.com/rauschma/status/496213393146404864/photo/1

# Simple Web Server

![Node.js Create Server](/01_Node_and_NPM/images/00_nodejs_create_server.png "Node.js Create Server")

Source: https://codeburst.io/all-about-http-in-node-js-and-3-best-ways-for-http-requests-in-web-development-6e5b6876c3a4

![Client Server](/01_Node_and_NPM/images/00_client_server.png "Client Server")

Source: https://www.sitepoint.com/build-a-simple-web-server-with-node-js/

![Request Response](/01_Node_and_NPM/images/00_request_response.png "Request Response")

Source: http://backenddev.diy.org/challenge/2

# Installing the Node.js and NPM

Visit the Node.js website by clicking the following link:

https://nodejs.org/en/


Click the Long Term Support (LTS) version (the version number may be various) download button to download the Node.js package:

![Download Node](/01_Node_and_NPM/images/02_download_node.png "Download Node")

Click and run the package after downloading.
MacOS and Windows will have different installation process.
Please follow the instruction to install the Node.js

After the installation process is done, restart your VS Code.
And then push control + ~ key to open the terminal:

![Open Terminal](/01_Node_and_NPM/images/03_open_terminal.png "Open Terminal")

Note: please make sure you are still in the amazon-apprenti-2019/CS242/YOURNAME/Module1 folder

Test the Node.js and NPM by typing the following commands in the terminal:
```
node -v
npm –v
```

![Node and NPM Version](/01_Node_and_NPM/images/04_node_npm_version.png "Node and NPM Version")

# Configuring the package.json
Navigate into the project folder in the terminal by using cd command. You can check whether you are in the correct folder by using pwd (MacOS and Linux) or cd (Windows) command.

Your result will be different based on where you keep your project. But you should get a similar result.

Type the following command in the terminal to initialize a Node project:
```
npm init –y
```

![NPM init](/01_Node_and_NPM/images/05_npm_init.png "NPM init")

This command created a package.json file with default content. You are supposed to see a `package.json` file under your Module1 (or project) folder.

![package.json in directory](/01_Node_and_NPM/images/06_package_json_directory.png "package.json in directory")

Note: this file is a JSON (JavaScript Object Notation) file that contains the project information and dependency information for your project. A JSON file is a file that contains key-value pairs. The basic syntax is { “key”: “value” }.

# Creating your first server-side web application
Create an app.js file under the Module1 folder:

![app.js in directory](/01_Node_and_NPM/images/07_app_js_directory.png "app.js in directory")

Type the following code into the `app.js` file:

![Create a Simple Server](/01_Node_and_NPM/images/08_app_js_code.png "Create a Simple Server")

Open the terminal in the VS Code and type the following command to run the code:
```
node app.js
```

![Text in Browser](/01_Node_and_NPM/images/10_browser_text.png "Text in Browser")

Click the http://localhost:3000 from the terminal or copy and paste it to your browser.

![Console Log of Server Running](/01_Node_and_NPM/images/09_console_log.png "Console Log of Server Running")


Now your first web server is running. Please hit the control + c key to quit the server.

 
# Adding the routing functionality
Let’s add routers to our server by updating the following code to the createServer section:

![Routing Functionality](/01_Node_and_NPM/images/11_routing_functionality.png "Routing Functionality")

Type the following command in the terminal to run the server:
```
node app.js
```

Click the http://localhost:3000 from the terminal or copy and paste it to your browser.

![Home Page](/01_Node_and_NPM/images/12_home_page.png "Home Page")

You are supposed to see the Home page text.


Change the URL to http://localhost:3000/about to see the difference.

![About Page](/01_Node_and_NPM/images/13_about_page.png "About Page")

Change the URL to http://localhost:3000/other to see the difference.

![404 Page](/01_Node_and_NPM/images/14_404_page.png "404 Page")
