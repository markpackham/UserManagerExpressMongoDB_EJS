// Customer Routes

// GET / Homepage
exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs",
    description: "Free NodeJs User Management System",
  };

  res.render("index", locals);
};

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
  const locals = {
    title: "New Customer Added",
    description: "Free NodeJs User Management System",
  };

  res.render("customer/add", locals);
};
