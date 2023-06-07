const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./routers/user');
const db = require('./config/index')
const app = express();

//connection to DB

db.connect();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Connection successfuly");
});
app.get("/api/v1/danh_sach", user);
