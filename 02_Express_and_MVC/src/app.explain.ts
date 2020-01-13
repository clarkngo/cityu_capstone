// imports the express module
import express from 'express';

// creates an Express application, traditionally named 'app'
const app = express();

/* route definition */
// "app.get()"
//  - method specifies a callback function that will be invoked
//  - whenever there is an HTTP GET request with a path ('/') relative to the site root.
// callback function
//  - takes a request and a response object as arguments,
//      and simply calls end() on the response to return the string "This is your Express server."
//      then it will end the response process.
// "res.end" signals to the server that all of the response headers and body have been sent
//  - that server should consider this message complete
//  - The method, res.end(), MUST be called on each response.
app.get('/', (req, res) => res.end('This is your Express server.'));

// starts up the server on port '3000' and prints a log comment to the console. With the server running,
// you could go to localhost:3000 in your browser to see the example response returned.
app.listen(3000, () => console.log('The server is running on http://localhost:3000'));
