import express from "express";
import {loginAuth, registerAuth} from "../controllers/auth.js";


const router = express.Router();


//Register
router.post("/register", registerAuth);

//Login
router.post("/login", loginAuth);


export default router;