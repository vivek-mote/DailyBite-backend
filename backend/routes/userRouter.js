import express from "express";
import { User } from "../models/userModel.js";

const userRouter = express.Router();

userRouter.post("/create-user",async(req,res)=>{
    try{
        if(!req.body.name||!req.body.email||!req.body.message){
            return res.status(400).send("All fields should be filled");
        }

        const newUser={
            name:req.body.name,
            email:req.body.email,
            message:req.body.message
        }

        const user= await User.create(newUser);

        return res.status(200).send(user);
    }catch(e){
        return res.send(e.message);
    }
});

export {userRouter};