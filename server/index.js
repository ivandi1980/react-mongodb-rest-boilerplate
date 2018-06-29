// Imports: Express
// import express from 'express';
// import router from './router.js';
const EXPRESS = require('express');
const ROUTER = require('./router.js');


// Initialize Express App
const APP = express();

// Imports: Middleware
// import morgan from 'morgan';
// import bodyParser from 'body-parser';
const morgan = require('morgan');
const bodyParser = require('body-parser');


// Use: Middleware


// Use: Static Files



// Use: Router
APP.use('./router.js');


// Port
const PORT = 3000 || process.env;


// Listener
APP.listen(port, () => {
  console.log('The server has started on port:  ' + PORT);
});


// Exports
// export default APP;
module.exports = APP;