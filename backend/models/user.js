const mongoose = require('mongoose')
const user = new mongoose.Schema({
  first_name: { type: String, required: true },

  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, requires: true },
  date: { type: Date, default: Date.now },
  servicename: { type: String, default: "None" },
  plan: { type: String, default: "None" },
});
User = mongoose.model("User", user)
module.exports=User