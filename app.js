const express = require("express");
const connectDb = require("./mongodb/connectDb");
const todoRoutes = require('./routes/todo.routes');
const app = express();

app.use(express.json());

connectDb();

app.use("/todos",todoRoutes);

app.get("/", (req, res) => {
  res.json("hello world");
});



module.exports = app;
