"use strict"

import express from "express";
import cors from "cors";
import env from "dotenv";
import mongoose from "mongoose";
import mainRoutes from "./routes/mainRoutes.js";
import { dbConnection } from "./config/db_conect.js";

env.config();

//Conetca do DB
dbConnection();

const app = express();
app.use(express.json());
app.use(cors());

//Rotas
app.use("/",mainRoutes);

app.listen(3002,()=>{
    console.log("Servidor Ativo");
})