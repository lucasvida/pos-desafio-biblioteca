import express from "express";
import { deleteBook, erroRouteBooks, getBooks,getSingleBook,postBook, putBook } from "../controllers/controllersBooks.js";

const booksRoutes = express.Router();

booksRoutes.get("/books", getBooks );
booksRoutes.get("/books/single/:id", getSingleBook);
booksRoutes.post("/books",postBook);
booksRoutes.put("/books/update/:id", putBook);
booksRoutes.delete("/books/delete/:id", deleteBook);

//Erro demais requisições
booksRoutes.all("/books", erroRouteBooks);


export default booksRoutes;