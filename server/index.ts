import express from "express";
const starController = require("./controllers/stars_controller")

const app = express();

app.get("/", starController.GetStars);

module.exports = {
  path: "/api/",
  handler: app
};