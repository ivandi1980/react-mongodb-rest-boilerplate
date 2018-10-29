// Imports: Dependencies
import express from 'express';
import cors from 'cors';
import opn from 'opn';
import bodyParser from 'body-parser';
import router from './router';

// Express App
const APP = express();

// Database: MongoDB


// Middleware: CORS
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(cors());

// Use: Static Files


// Use: Router
APP.use(router);

// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Open URL On Server Start
opn(`http://localhost:${PORT}`);

// Exports
export default APP;
