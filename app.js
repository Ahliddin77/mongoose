import express from "express";
import { todoModel } from "./models/todo.model.js";
import { carModel } from "./models/car.model.js";
import { bookModel } from "./models/book.model.js";
import { restaurantModel } from "./models/restaurant.model.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Todo routes
app.get("/todos", async (req, res) => {
  const todos = await todoModel.find();
  res.send({ todos });
});

app.put("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await todoModel.findByIdAndUpdate(id, body);
  res.send({ msg: "Todo updated successfully" });
});

app.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;
  await todoModel.findByIdAndDelete(id);
  res.send({ message: "Todo deleted successfully" });
});

// Car routes
app.get("/cars", async (req, res) => {
  const cars = await carModel.find();
  res.send({ cars });
});

app.post("/cars", async (req, res) => {
  const car = new carModel(req.body);
  await car.save();
  res.send({ message: "Car added successfully", car });
});

app.put("/cars/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await carModel.findByIdAndUpdate(id, body);
  res.send({ msg: "Car updated successfully" });
});

app.delete("/cars/:id", async (req, res) => {
  const id = req.params.id;
  await carModel.findByIdAndDelete(id);
  res.send({ message: "Car deleted successfully" });
});

// Book routes
app.get("/books", async (req, res) => {
  const books = await bookModel.find();
  res.send({ books });
});

app.post("/books", async (req, res) => {
  const book = new bookModel(req.body);
  await book.save();
  res.send({ message: "Book added successfully", book });
});

app.put("/books/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await bookModel.findByIdAndUpdate(id, body);
  res.send({ msg: "Book updated successfully" });
});

app.delete("/books/:id", async (req, res) => {
  const id = req.params.id;
  await bookModel.findByIdAndDelete(id);
  res.send({ message: "Book deleted successfully" });
});

// Restaurant routes
app.get("/restaurants", async (req, res) => {
  const restaurants = await restaurantModel.find();
  res.send({ restaurants });
});

app.post("/restaurants", async (req, res) => {
  const restaurant = new restaurantModel(req.body);
  await restaurant.save();
  res.send({ message: "Restaurant added successfully", restaurant });
});

app.put("/restaurants/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await restaurantModel.findByIdAndUpdate(id, body);
  res.send({ msg: "Restaurant updated successfully" });
});

app.delete("/restaurants/:id", async (req, res) => {
  const id = req.params.id;
  await restaurantModel.findByIdAndDelete(id);
  res.send({ message: "Restaurant deleted successfully" });
});

export default app;
