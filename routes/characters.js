const axios = require("axios");
const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/characters/:characterId", async (req, res) => {
  console.log("req.params==>", req.params);
});

module.exports = router;
