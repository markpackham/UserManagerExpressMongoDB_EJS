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
