const express = require("express");
const router = express.Router();
const {allJob, allJobtesting} = require("../controllers/JobDesc");

router.route("/").get(allJob);
router.route("/testing").get(allJobtesting);

module.exports = router

// 