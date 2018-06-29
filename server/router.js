// Requirements: Express Router
const ROUTER = require('express').Router();

// Imports: Database Controllers
// import sqlController from './controllers/sqlcontroller.js';
// import mongodbController from './controllers/mongodbcontroller.js';
const sqlController = require('./controllers/sqlcontroller.js');
const mongodbcontroller = require('./controllers/mongodbcontroller.js');


// Imports: API Controllers
// import apiController from './controllers/apicontroller.js';
const apicontroller = require('./controllers/apicontroller.js')




/****************************** ROUTES: Homepage ******************************/


/****************************** ROUTES: Homepage ******************************/




/*************************** ROUTES: SQL Controller ***************************/


/*************************** ROUTES: SQL Controller ***************************/





/************************* ROUTES: MongoDB Controller *************************/


/************************* ROUTES: MongoDB Controller *************************/



// Exports
// export default ROUTER;
module.exports = ROUTER