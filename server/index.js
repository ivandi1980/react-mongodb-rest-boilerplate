// Requirements: Express
import express from 'express';
import router from './router.js';

// Initialize Express App
const app = express();

// Requirements: Middleware
import morgan from 'morgan';
import bodyParser from 'body-parser';


// Use: Middleware


// Use: Static Files


// Use: Router


// Define: Port
const port = 3000;

// Listener
app.listen(port, function () {
  console.log('The server has started on port:  ' + port);
});