const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`donationService listening http://localhost:${port}`);
  });