const express = require("express");
const router = express.Router();
const register = require("../controllers/auth");

router.route("/register").post(register);
console.log(register);

module.exports = router;
