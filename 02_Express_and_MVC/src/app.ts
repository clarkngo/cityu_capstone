import express from 'express';
const app = express();

// the router
app.get('/', (req, res) => res.end('This is your Express server.'));

app.listen(3000, () => console.log('The server is running on http://localhost:3000'));
