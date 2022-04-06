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

  //   res.status(200).json({ message: "characters route" });
});

module.exports = router;
