require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));

// Template Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
