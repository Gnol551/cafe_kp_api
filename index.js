const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());

// Import Routes
const homeRoute = require("./routes/home");
const productsRoute = require("./routes/products");

// Routes
app.use("/api/", homeRoute);
app.use("/api/products", productsRoute);

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
