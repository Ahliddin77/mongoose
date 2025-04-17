import express from "express";
import { todoModel } from "./models/todo.model.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/todos", async (req, res) => {
  const todos = await todoModel.find();
  res.send({
    todos: todos,
  });
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
  res.send({
    message: "Todo deleted successfully",
  });
});

export default app;
