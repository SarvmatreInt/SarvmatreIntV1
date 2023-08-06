const express = require("express");
const router = repress.Router();
const app = express();

router.get("/", (req, res) => {
    res.send("Hello home from sarvamatre router.js");
});
