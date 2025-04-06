import express from "express";
import { getPrincipal } from "../controllers/controllersPrincipal.js";

const main = express.Router();

main.get("/",getPrincipal);

export default main;