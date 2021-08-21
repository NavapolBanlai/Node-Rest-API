const express = require("express");
const router = express.Router();
const Register = require("../../src/login/register")

router.post("/register", Register.register);

module.exports = router;
