const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    name: String,
    email:String,
    age: Number
  }
);

module.exports = mongoose.model("user", User);
