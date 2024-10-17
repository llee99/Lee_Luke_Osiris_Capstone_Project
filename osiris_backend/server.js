const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();

const app = express();

const port = process.env.PORT || 5000;

 //I use this middleware to parse the data stream that we receive from client
app.use(express.json());
// product middleware
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});