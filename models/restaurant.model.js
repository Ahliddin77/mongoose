import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  cuisine: String,
  rating: Number,
});

export const restaurantModel = mongoose.model("restaurants", RestaurantSchema);
