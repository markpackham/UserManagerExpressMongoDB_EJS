const mongoose = require("mongoose");

const Customer = require("../models/Customer");

// GET / Homepage
exports.homepage = async (req, res) => {
  const messages = await req.flash("info");
  const locals = {
    title: "NodeJs",
    description: "Free NodeJs User Management System",
  };

  // Page limit used for pagination
  let perPage = 12;
  // Set default request to 1
  let page = req.query.page || 1;

  try {
    const customers = await Customer.aggregate([{ $sort: { updateAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Customer.countDocuments();

    res.render("index", {
      messages,
      locals,
      customers,
      current: page,
      pages: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log(error);
  }
};

// Non Pagination solution
// exports.homepage = async (req, res) => {
//   const messages = await req.flash("info");

//   const locals = {
//     title: "NodeJs",
//     description: "Free NodeJs User Management System",
//   };

//   try {
//     const customers = await Customer.find({}).limit(25);
//     res.render("index", { messages, locals, customers });
//   } catch (error) {
//     console.log(error);
//   }
// };

// GET / New Customer Form
exports.addCustomer = async (req, res) => {
  const locals = {
    title: "Add Customer - NodeJs",
    description: "Free NodeJs User Management System",
  };

  res.render("customer/add", locals);
};

// POST / Create New Customer Form
exports.postCustomer = async (req, res) => {
  const newCustomer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    tel: req.body.tel,
    email: req.body.email,
    details: req.body.details,
  });

  try {
    await Customer.create(newCustomer);
    await req.flash("info", "Customer Added Successfully");

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// GET / SHOW a Customer
exports.view = async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });

    const locals = {
      title: "View Customer Data",
      description: "Free NodeJs User Management System",
    };

    res.render("customer/view", {
      locals,
      customer,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET / EDIT a Customer
exports.edit = async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });

    const locals = {
      title: "Edit Customer Data",
      description: "Free NodeJs User Management System",
    };

    res.render("customer/view", {
      locals,
      customer,
    });
  } catch (error) {
    console.log(error);
  }
};
