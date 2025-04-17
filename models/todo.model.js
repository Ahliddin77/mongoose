import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
  deadline: Date,
  finished_at: Date,
});

export const todoModel = mongoose.model("todos", TodoSchema);
