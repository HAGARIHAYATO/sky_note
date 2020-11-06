import express from "express"
const Stars = require("../models/stars_model");

module.exports = {
  GetStars: function(req, res) {
    const array = Stars.getIndex()
    res.send(JSON.stringify({
      Result: array
    }))
  }
}