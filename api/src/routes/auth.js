import express from "express";
import {checkMail, loginAuth, registerAuth} from "../controllers/auth.js";


const router = express.Router();


//Register
router.post("/register", registerAuth);

//Login
router.post("/login", loginAuth);

router.post("/checkMail", checkMail);


export default router;