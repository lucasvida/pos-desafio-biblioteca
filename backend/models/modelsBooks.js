import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
    {
        title: String,
        date: Number,
        img: String,
        isbn: String,
        editora: String,
    }
)

const Book = mongoose.model("Book", booksSchema);

export default Book;