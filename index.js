const express = require("express");
const formidable = require("express-formidable");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(formidable());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/marveliiusers");

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "badman" });
// });
// la vie
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const usersRoutes = require("./routes/users");
app.use(usersRoutes);

// const favoritesRoutes = require("./routes/favorites");
// app.use(favoritesRoutes);

// app.listen(process.env.PORT, () => {
//   console.log("Server has started");
// });
app.listen(3700, () => {
  console.log("Server has started");
});
