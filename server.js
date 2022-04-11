const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const routes = require("./routes/routes");

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('connected to db'); 
});

app.use("/api", routes);
app.use(express.json());
app.use(express.static("dist"));
app.listen(5000, () => {
    console.log('Server running');
});