const express = require("express");
const router = express.Router();

/*
Customer Routes
*/

router.get("/", customerController.homepage);

// Home
app.get("/", (req, res) => {
  const locals = {
    title: "NodeJs",
    description: "Free NodeJs User Management System",
  };
  res.render("index", { locals });
});

// Never forget to export the router
module.exports = router;
