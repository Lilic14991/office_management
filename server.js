require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /controllerName to router js files
app.use("/offices", require("./routes/officeRoutes"));
app.use("/productLines", require("./routes/productLineRoutes"));
app.use("/employees", require("./routes/employeeRouter"));
app.use("/customers", require("./routes/customerRouter"));
app.use("/products", require("./routes/productRouter"));
app.use("/payments", require("./routes/paymentRouter"))

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
