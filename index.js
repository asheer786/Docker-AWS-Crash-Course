const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Ibexlabs");
});

app.get("/me", (req, res) => {
  res.send("hello");
});

app.listen(4040, () => {
  console.log("listening");
});
