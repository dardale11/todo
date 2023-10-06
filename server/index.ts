import express, { Express, Request, Response } from 'express';
import connectDB from './config/db';
import configureRoutes from './routes';
import cors from 'cors';
// TODO: check if it is needed to use dotenv
// import dotenv from 'dotenv';

//For env File
// dotenv.config();

// calling anonumous function
let db: any;
(async () => {
  db = await connectDB();
})();

// setting express server
const app: Express = express();

// add cors usage
app.use(cors());
// add json parsing
app.use(express.json());
// add routing
configureRoutes(app);
// define server port
const port = process.env.PORT || 8000;
// run the server
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
