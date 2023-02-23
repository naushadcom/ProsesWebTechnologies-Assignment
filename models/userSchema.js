const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  address:{
    type:String,
    require:true
  }
});

const users = new mongoose.model("proses", userSchema);

module.exports = users;
