//app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).end("Hello World 2!");
});

module.exports = app;
