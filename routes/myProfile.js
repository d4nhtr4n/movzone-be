const express = require("express");
const { getMyProfile } = require("../controllers/myProfile");
const router = express.Router();
const { protect } = require("../middleware/auth");

router.route("/getProfile").get(protect, getMyProfile);
module.exports = router;
