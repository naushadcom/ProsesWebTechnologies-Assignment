const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },
  mobile: {
    type: Number,
    required: true,
    match: [
      /^[0-9]{10}$/,
      "Please enter a valid mobile number",
    ],
  },
  address: {
    type: String,
    require: true,
  },
});

const users = new mongoose.model("proses", userSchema);

module.exports = users;
