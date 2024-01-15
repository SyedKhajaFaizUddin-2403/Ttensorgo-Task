const mongoose = require("mongoose");
const user = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, requires: true },
  date: { type: Date, default: Date.now },
  servicename: { type: String, default: "None" },
    plan: { type: String, default: "None" },
    users_avail: { type: String, default: 0 },
  validity:{type:Number,default:1}
});
User = mongoose.model("User", user);
module.exports = User;
