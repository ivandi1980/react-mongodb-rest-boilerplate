// Imports: Dependencies
import express from 'express';

// Express: Router
const ROUTER = express.Router();

// Imports: Controllers
import mongodbcontroller from './controllers/mongodbcontroller.js';
import apiController from './controllers/apicontroller.js';

// ROUTES
// Home
app.get('/', function(req, res) {
  res.json({ message: 'Welcome to the Poke-MongoDB RESTful API!' });
});

// MongoDB Controller


// API Controller



// Exports
export default ROUTER;