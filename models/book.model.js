import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
  genre: String,
});

export const bookModel = mongoose.model("books", BookSchema);
