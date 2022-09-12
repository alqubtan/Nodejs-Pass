const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

// preperaing the data

// reading the data from file
let buffer = fs.readFileSync("orders.txt").toString();
// convert buffer to json data
let data = JSON.parse(buffer);

// calc the total
data.orders.forEach((order) => {
  data.total += order.totalAfterDiscount;
});

// orders endpoint
app.get("/orders", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
