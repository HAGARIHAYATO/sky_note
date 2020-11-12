import express from "express";
const starController = require("./controllers/stars_controller")

const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.get("/stars", starController.GetStars);
app.post("/stars", starController.CreateStars);

module.exports = {
  path: "/api/",
  handler: app
};