'use strict'

// "require" function is a built-in function in CommonJS module specification
// CommonJS module is the standard used in Node.js for working with modules

// "http" module lets you use HTTP server and client
const http = require('http');

// assign a port number to use
const port = 3000;


// "http" module has a method "createServer"
// "createServer"
//   - creates a new instance of "http.Server" (creates an HTTP Server object)
//   - Turns your computer to an HTTP server
//   - can take two parameters "options" Object or "requestListener" function
//     in this case, "requestListener" function was used
// "requestListener"
//   - a function that is called each time a server gets a request
//   - handles "request" (req) from the user, and also "response" (res) back to the user
// "request" - first parameter, the "Request" object, represents "IncomingMessage" object
// "response" - second parameter represents "ServerResponse" object, which has methods
//   of handling the response stream back to the user
const server = http.createServer((req, res) => {

  // declare a variable to store strings
  let content;

  // if user requested for the URL + /about, assign string that has HTML elements to "content"
  if (req.url === '/about') content = '<h3>This is the ABOUT page.</h3>';

  // else if user requested for the URL + /, assign string that has HTML elements to "content"
  else if (req.url === '/') content = '<h1>This is the HOME page</h1>';

  // else if user requested for the URL + any characters, assign string that has HTML elements to "content"
  else content = '<h2>404 Page is not found.</h2>';

  // "res.statusCode" controls the status code that will be sent to the client when headers get flushed
  // assign status code 200 (OK)
  res.statusCode = 200;

  // "res.setHeader" sets a single header value for header object
  //  - takes two parameters "name" (string), "value" (any)
  // "Content-Type" - entity header is used to indicate the media type of resource
  // "text/html; charset=utf-8" - to display HTML correctly, a web browser must know
  //     the character set used in the page
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // "res.end" signals to the server that all of the response headers and body have been sent
  //   that server should consider this message complete
  //   The method, res.end(), MUST be called on each response.
  // parameters
  //   - data <string> | <Buffer>
  //   - encoding <string>
  //   - callback <Function>
  // Returns: <this>
  // "data" was used as a parameter in this case
  res.end(content);
});

// Starts the HTTP server listening for connections.
// we used two parameters "port" (number) and a "callback" (function)
server.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
