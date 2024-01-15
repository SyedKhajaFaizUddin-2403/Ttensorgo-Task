const express = require('express')
const mongoose = require('mongoose')
const app = express()
var cors = require('cors')
require('dotenv').config()



const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)





























const route=require("./routes/route")
app.use(cors())
mongoose.connect(
  "mongodb+srv://syedkhajafaizuddin786123:DBpassword@cluster0.avvsx7u.mongodb.net/Course?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use('/',route)
app.listen(8000, () => {
  console.log("server started");
});