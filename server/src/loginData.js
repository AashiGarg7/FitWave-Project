import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';



const app = express.Router();
const port = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("hello world!");
})
app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("hello world!");
})


export default app;