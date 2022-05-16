import express from "express";
import User from "../models/user.js";

//Create
// export const createUser = async (req, res, next)=>{
//     const newUser = new User(req.body);
//     try{
//         const saveUser = await newUser.save();
//         res.status(200).json(saveUser);
//     }catch(err){
//         next(err);
//     }
// }


//Update
export const updateUser = async (req, res, next)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new:true});
        res.status(200).json(updatedUser);
    }catch(error){
        next(error);
    }
}

//Delete
export const deleteUser = async (req, res, next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Da xoa");
    }catch(error){
        next(error);
    }
}

//Get id
export const getUser = async (req, res, next)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
}

//Get All
export const getUsers = async (req, res, next)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(error){
        next(error);
    }
}