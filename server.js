const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const app = express()
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('connected to db'); 
});
app.use(express.json());
app.use(express.static('dist'));
app.use("/api", routes);
app.listen(5000, () => {
    console.log('Server running');
});