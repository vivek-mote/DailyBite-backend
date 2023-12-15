import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {userRouter} from "./routes/userRouter.js"
import cors from "cors"

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(userRouter);

const port=process.env.PORT;
const mongodbURL=process.env.MONGODBURL;
console.log(port) 

app.get("/",(req,res)=>{
    res.send("Hello from over");
})

mongoose.connect(mongodbURL).then(()=>{
    console.log("MongoDB connected");
    app.listen(5000,()=>{
        console.log("Server is running");
    })
}).catch((error)=>{
    console.log("Some error occured");
})
