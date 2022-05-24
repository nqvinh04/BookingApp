import express from "express";
import {createHotel,
        deleteHotel,
        getHotel,
        getHotels,
        updateHotel,
        countByCity,
        countByType,
        getHotelRooms} from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/new", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

//countByCity
router.get("/countByCity", countByCity);

//countByType
router.get("/countByType", countByType);

//getHotelRooms
router.get("/room/:id", getHotelRooms);


export default router;