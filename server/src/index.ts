import { json } from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { todoRouter } from "./routes/todo.router";

const app = express();

app.use(json());

app.use(todoRouter);

mongoose
  .connect("test", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log)
  .catch(console.log);

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
