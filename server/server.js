require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// Hardcode some items
const items = new Map([
  [1, { priceInCents: 10000, name: "Test One" }],
  [2, { priceIncents: 20000, name: "Test Two" }],
]);

app.listen(3000);
