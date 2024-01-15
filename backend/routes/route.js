const express = require("express");
const app = express();
const User = require("../models/user");
const Services = require("../models/services");
const bodyParser = require("body-parser");
const Plans = require("../models/plans");

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
app.use(express.json());
app.post("/signup", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const res1 = await User.findOne({ email: email });
  if (res1) {
    res.send("Already exist");
  } else {
    const user = new User({ first_name, last_name, email, password });
    user
      .save()
      .then((result) => {
        console.log("savedd" + result);
        res.send({
          message: "Successful",
        });
      })
      .catch((err) => {
        console.log("error aaya");
        res.send(err);
      });
  }
});
app.post("/userlogin", async (req, res) => {
  const { email, password } = req.body;
  res1 = await User.findOne({ email: email });
  if (res1) {
    const id = JSON.stringify(res1._id);
    res.send(id);
  } else {
    res.send({ message: "no such user" });
  }
});
app.post("/Adminlogin", async (req, res) => {
  const { email, password } = req.body;
  res1 = await Admin.findOne({ email: email });
  if (res1) {
    const id = JSON.stringify(res1._id);
    res.send(id);
  } else {
    res.send({ message: "no such admin" });
  }
});
app.post("/superadminlogin", async (req, res) => {
  const { email, password } = req.body;
  res1 = await Superadmin.findOne({ email: email });
  if (res1) {
    const id = JSON.stringify(res1._id);
    res.send(id);
  } else {
    res.send({ message: "no such user" });
  }
});
app.post("/add_service", async (req, res) => {
  //  servicename;
  const { servicename, description } = req.body;
  const res1 = await Services.findOne({ servicename: servicename });
  if (res1) {
    res.send({ message: "Service already exist" });
  } else {
    const services = new Services({ servicename, description });
    services
      .save()
      .then((result) => {
        res.send({ message: "Services added" });
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

app.post("/add_plans", async (req, res) => {
  const { plan_type, servicename, price, validity, benefits } = req.body;
  // const res1 = await Plans.findOne({ servicename: servicename });
  // if (res1) {
  //   res.send({ message: "plan already exist" });
  // } else {
  const plans = new Plans({ plan_type, servicename, price, validity, benefits });
  plans
    .save()
    .then((result) => {
      res.send({ message: "plan added" });
    })
    .catch((err) => {
      res.send(err);
    });
  //  }
});

app.post("/payment", async (req, res) => {
  const { user_id, servicename, plan_type, price } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: servicename,
            },
            unit_amount: price
          },
          quantity: 1
        },
      ],
      success_url: `http://localhost:3000/dashboard`,
      cancel_url: `http://localhost:3000/login`
    });
    res.send({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
app.post('/update_service', async (req, res) => {
  const { servicename, description } = req.body
  res1 = await Services.updateOne({ servicename: servicename }, { $set: req.body })
  res.send("done")
})
app.post("/update_plans", async (req, res) => {
  const { servicename, plan_type, price, benefits } = req.body;
  res1 = await Plans.updateOne(
    { servicename: servicename },
    { $set: req.body }
  );
  res.send("done with plans");
});
app.get("/get_services", async (req, res) => {
  const data = await Services.find({})
  res.status(200).json(data)

})
app.get("/get_plans", async (req, res) => {
  const data = await Plans.find({});
  res.status(200).json(data);
});





























module.exports = app