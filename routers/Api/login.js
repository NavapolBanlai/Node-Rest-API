const express = require("express");
const router = express.Router();
const Register = require("../../src/login/register")

router.get("/register", Register.register);

module.exports = router;
