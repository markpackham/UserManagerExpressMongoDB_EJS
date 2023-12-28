require("dotenv").config();

const express = require("express");
// EJS Layouts
const expressLayouts = require("express-ejs-layouts");

// Method Override
// https://www.npmjs.com/package/method-override
// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
// Use in Middleware
const methodOverride = require("method-override");

// Working with Sessions
const session = require("express-session");

// Update user with messages after carrying out actions eg creating a customer
const flash = require("connect-flash");

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
// Let us use PUT & DELETE
app.use(methodOverride("_method"));

// Static Files
app.use(express.static("public"));

// Express Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    // An entire week
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

// Flash Message
app.use(flash({ sessionKeyName: "flashMessage" }));

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
