import express from "express"

// import { sendreservation } from "../controllers/reservation.js";
import { sendreservation } from "../controllers/reservation.js";
const router=express.Router();



router.post("/send", sendreservation);



export default router;

