const axios = require("axios");
const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();
// const SHA256 = require("crypto-js/sha256");
// const encBase64 = require("crypto-js/enc-base64");
// const uid2 = require("uid2");

// const User = require("../models/User");

router.post("/users/signup", async (req, res) => {
  res.status(200).json({ message: "signup" });
});

module.exports = router;
