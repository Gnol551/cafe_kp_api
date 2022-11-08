const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Import Routes
const homeRoute = require("./routes/home");
const productsRoute = require("./routes/products");
const authRoute = require("./routes/auth")

// Routes
app.use("/api/", homeRoute);
app.use("/api/products", productsRoute);
app.use('/api/auth', authRoute)

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
