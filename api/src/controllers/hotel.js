import express from "express";
import Hotel from "../models/hotel.js";

//Create
export const createHotel = async (req, res, next)=>{
    const newHotel = new Hotel(req.body);
    try{
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    }catch(err){
        next(err);
    }
}

//Update
export const updateHotel = async (req, res, next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new:true});
        res.status(200).json(updatedHotel);
    }catch(error){
        next(error);
    }
}

//Delete
export const deleteHotel = async (req, res, next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Da xoa");
    }catch(error){
        next(error);
    }
}

//Get id
export const getHotel = async (req, res, next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(error){
        next(error);
    }
}

//Get All
export const getHotels = async (req, res, next)=>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(error){
        next(error);
    }
}