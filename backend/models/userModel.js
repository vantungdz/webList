const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new mongoose.Schema(
  {
    name: String,
    age: Number
  }
);

module.exports = mongoose.model("user", User);
