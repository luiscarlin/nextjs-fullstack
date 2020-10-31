import { json } from "body-parser";
import express from "express";

const app = express();

app.use(json());

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
