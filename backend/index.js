import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser"; // take in incoming post request bodies

// import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// User routes from user.js
// app.use('/users', usersRoutes);

// Home url... test
app.get('/', (req, res) => {res.send('Hello World!')});
 
// Listening to port 5000... if successful, log message in the console
app.listen(PORT, () => console.log(`Server running on port: http:://localhost:${PORT}`));