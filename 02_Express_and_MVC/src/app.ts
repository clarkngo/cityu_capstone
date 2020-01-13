import express from 'express';

import orderController from './controllers/order-controller';
import logger from './middlewares/logging';

const app = express();

app.use(logger);
app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

// the router
app.get('/', (req, res) => res.render('index', {
  title: 'The index page title',
  content: 'This is the content for the index page.'
}));
app.get('/order', orderController);

app.listen(3000, () => console.log('The server is running on http://localhost:3000'));
