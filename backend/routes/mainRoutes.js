import express from "express";
import main from "./main.js";
import booksRoutes from "./books.js";

const mainRoutes = express.Router();

mainRoutes.use("/",main);
mainRoutes.use("/",booksRoutes);

export default mainRoutes;