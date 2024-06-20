const express = require("express");
const router = express.Router();
const authToken = require("../middleware/authtoken");
const userSignup = require("../controller/user/signup");
const userLogin = require("../controller/user/login");
const userLogOut = require("../controller/user/logout");



router.post("/signup",userSignup);
router.post("/login",userLogin);
router.get("/logout",userLogOut)

module.exports = router;