const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Ibexlabs DevOps Engineer");
});

app.get("/me", (req, res) => {
  res.send("Hi I am asheer");
});

app.listen(5000, () => {
  console.log("listening");
});
