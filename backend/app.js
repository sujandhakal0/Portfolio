import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnectin from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from './router/messageRoutes.js'
import userRouter from './router/userRoutes.js '

const app = express();
dotenv.config({ path: "./config/config.env" });


// middleware
app.use(
  cors({
    origin: [process.env.PORTFOLIO_URL, process.env.DASHBORD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use(fileUpload({
    useTempFiles:true,
     tempFileDir: "/tmp",
}))
// middleware

app.use("/api/v1/message", messageRouter) 
app.use("/api/v1/user ", userRouter) 


dbConnectin()
app.use(errorMiddleware)


export default app;
