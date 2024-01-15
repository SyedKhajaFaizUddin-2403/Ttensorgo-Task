const mongoose = require("mongoose");
const plans = mongoose.Schema({
  plan_type: { type: String, required: true },
  servicename: { type: "String", requied: true },
  price: { type: Number, required: true },
  benefits: { type: [String] },
});
Plans = mongoose.model("plans", plans);
module.exports = Plans;
