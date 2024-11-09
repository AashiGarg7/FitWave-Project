import express from 'express';
// import userModel from './models/userModel.js';
// import mongoose from 'mongoose';
// import User from './models/userModel.js';
import DBConnect from './config/dbConfig.js';
// import session from 'express-session';
import dbURI from "./config/envConfig.js"
// import loginUser from './services/authService.js';
// import otpsending from './validations/emailvalidations.js'
// import verifyotp from './validations/verifyotp.js'
// import loginData from './validations/loginData.js';

// import loginUser from './services/authService.js';
// import otpsending from './validations/emailvalidations.js'
// import verifyotp from './validations/verifyotp.js'
import router from './routes/userRoutes.js';
import router1 from './routes/aiRoute.js'
import sessionConfig from './config/sessionConfig.js';
import cors from "cors"; 
import corsAnywhere from 'cors-anywhere';
// DBConnect(dbURI.dbURI);
const app = express();

app.use(express.json());
// app.get('/', (req, res) => {
//     res.json({ msg: "Hello World" });
// })
// app.use('/email', otpsending);
// app.use('/verifyotp', verifyotp);

// app.use('/api/email', loginData);

// app.post('/users', async (req, res) => {
//     await loginUser.signupUser(req, res);
// })
// app.get('/users', async (req, res) => {
//     await loginUser.loginUser(req, res);
// })
app.use(sessionConfig);
app.use(cors({
    origin:"http://localhost:5173", 
    credentials:true
}));
// app.get('/', (req, res) => {
//     res.json({ msg: "Hello World" });
// })
// app.use('/email', otpsending);
// app.use('/verifyotp', verifyotp);
app.use('/user',router);  
app.use('/api',router1); 

// app.post('/users', async (req, res) => {
//     await loginUser.signupUser(req, res);
// })
// app.get('/users', async (req, res) => {
//     await loginUser.loginUser(req, res);
// })


// app.listen(3000, () => {
//     console.log("listening on 3000");
// })

const host = 'localhost';
const port = 3000;
corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
  }).listen(port, host, () => {
    console.log(`CORS Anywhere server running on http://${host}:${port}`);
  });