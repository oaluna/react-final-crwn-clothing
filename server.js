const express = require('express');
const cors = require('cors');
const path = require('path');
const {DoorDashClient} = require("@doordash/sdk");

const { fileURLToPath } = require("url");
const { v4 } = require("uuid");


if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const port = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);


app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.get("/order", (req, res) => {
  res.render("order");
});

app.post("/get-delivery-rate", async (req, res) => {
  const client = new DoorDashClient({
    developer_id: process.env.DEVELOPER_ID,
    key_id: process.env.KEY_ID,
    signing_secret: process.env.SIGNING_SECRET,
  });
  
  const response = await client.deliveryQuote({
    external_delivery_id: uuidv4(),
    pickup_address: "424 Jones Street, San Francisco, CA, 94102",
    pickup_phone_number: "+1(628)2553906",
    pickup_business_name: "Glowing Flowers | Plants & Gifts",
    dropoff_address: `${req.body.street}, ${req.body.city}, ${req.body.zipcode}`,
    dropoff_phone_number: req.body.dropoff_phone_number,
    dropoff_contact_given_name: req.body.dropoff_contact_given_name,
    dropoff_contact_family_name: req.body.dropoff_contact_family_name,
    order_value: req.body.order_value,
  });
  
  res.send(response);
  console.log("QUOTE", response);
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };
  
  app.post("/create-delivery", async (req, res) => {
  const client = new DoorDashClient({
    developer_id: process.env.DEVELOPER_ID,
    key_id: process.env.KEY_ID,
    signing_secret: process.env.SIGNING_SECRET,
  });

  const response = await client.deliveryQuoteAccept(
    "bb9868de-962c-4ef4-baff-8a3bb8199f1b"
  );

  const flowersTotal = (response.data.order_value / 100).toFixed(2);
  const feeTotal = (response.data.fee / 100).toFixed(2);
  const orderTotal = Number(flowersTotal) + Number(feeTotal);

  const data = {
    flowersTotal: flowersTotal,
    feeTotal: feeTotal,
    orderTotal: orderTotal,
  };

  res.render("order", {
    flowersTotal: data.flowersTotal,
    feeTotal: data.feeTotal,
    orderTotal: data.orderTotal,
  });
  console.log("ACCEPT", response);
});

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});