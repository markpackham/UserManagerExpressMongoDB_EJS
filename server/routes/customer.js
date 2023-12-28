const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

/*
Customer Routes
*/
router.get("/", customerController.homepage);

// eg http://localhost:5000/add
router.get("/add", customerController.addCustomer);

router.post("/add", customerController.postCustomer);

router.get("/view/:id", customerController.view);

// Never forget to export the router
module.exports = router;
