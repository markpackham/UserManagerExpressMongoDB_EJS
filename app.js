require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();
// http://localhost:5000/
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));

// Template Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Home
app.get("/", (req, res) => {
  const locals = {
    title: "NodeJs",
    description: "Free NodeJs User Management System",
  };

  res.render("index", { locals });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
