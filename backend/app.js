import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbconnection} from "./database/dbconnection.js" // import db file 
import { errorMiddleware } from "./error/error.js";
import reservationRoute from "./routes/reservationRoute.js"

const app=express();

dotenv.config({path:"./config/config.env"}); // path of env file  for port which is in server.js

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true

    }))
    
    app.get("/", (req, res, next)=>{return res.status(200).json({
        success: true,
        message: "HELLO WORLD AGAIN"
      })})


app.use(express.json());// convert the data to obj for post req

app.use(express.urlencoded({extended:true}));//store the incoming data nd convert for get request

app.use("/api/v2/reservation", reservationRoute); // use route from inside file



dbconnection(); // call 



// use middleware from error folder
app.use(errorMiddleware);


export default app;