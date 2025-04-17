import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
});

export const carModel = mongoose.model("cars", CarSchema);
