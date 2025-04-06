import mongoose, { Schema } from "mongoose";

const booksSchema = new mongoose.Schema(
    {
        title: String,
        date: String,
        isbn: String,
        editora: String,
    }
)

const Book = mongoose.model("Book", booksSchema);

export default Book;