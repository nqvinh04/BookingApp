import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

//Create
export const createRoom = async (req, res, next)=>{
    const newRoom = new Room(req.body);
    const hotelId = req.params.hotelId;

    try{
        const saveRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: saveRoom._id}
            });
        }catch (err){
            next(err);
        }
        res.status(200).json(saveRoom);
    }catch(err){
        next(err);
    }
}

//Update
export const updateRoom = async (req, res, next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new:true});
        res.status(200).json(updatedRoom);
    }catch(error){
        next(error);
    }
}

//Delete
export const deleteRoom = async (req, res, next)=>{
    try{
        await Room.findByIdAndDelete(req.params.id);
        res.status(200).json("Da xoa");
    }catch(error){
        next(error);
    }
}

//Get id
export const getRoom = async (req, res, next)=>{
    try{
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    }catch(error){
        next(error);
    }
}

//Get All
export const getRooms = async (req, res, next)=>{
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms);
    }catch(error){
        next(error);
    }
}