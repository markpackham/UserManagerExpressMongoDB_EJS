require("dotenv").config();

const express = require("express");
// EJS Layouts
const expressLayouts = require("express-ejs-layouts");

// Working with Sessions
const session = require("express-session");

// Update user with messages after carrying out actions eg creating a customer
const { flash } = require("express-flash-message");

const connectDB = require("./server/config/db");

const res = require("express/lib/response");
const mongoose = require("mongoose");

const app = express();
// http://localhost:5000/
const port = 5000 || process.env.PORT;

// Connect to Database
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));

// Express Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    // 24 hours
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// Template Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routes
app.use("/", require("./server/routes/customer"));

// 404 Error Page
app.get("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
