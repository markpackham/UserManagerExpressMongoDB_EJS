const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

/*
Customer Routes
*/
router.get("/", customerController.homepage);

router.get("/about", customerController.about);

// eg http://localhost:5000/add
router.get("/add", customerController.addCustomer);

router.post("/add", customerController.postCustomer);

router.get("/view/:id", customerController.view);

router.get("/edit/:id", customerController.edit);

router.put("/edit/:id", customerController.update);

router.delete("/edit/:id", customerController.delete);

router.post("/search", customerController.search);

// Never forget to export the router
module.exports = router;
