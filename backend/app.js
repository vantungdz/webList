require('dotenv').config();
const user = require('./routes/users')
const express = require('express')
const mongoose = require('mongoose');
const router = require("./routes/index");

const app = express()
const monggoString = process.env.DATABASE_URL


// Middleware
app.use(express.json());

// Database

mongoose.connect(monggoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


// Routers
app.use(router);
app.use(user);

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})


module.exports = app;