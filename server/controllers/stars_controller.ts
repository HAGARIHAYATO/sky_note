import express from "express"
const Stars = require("../models/stars_model");

module.exports = {
  GetStars: async function(req: any, res: any) {
    const array = await Stars.getIndex(req.query)
    await res.send(JSON.stringify({
      Result: array
    }))
  },
  CreateStars: async function(req: any, res: any) {
    const response = await Stars.insert(req.body.params)
    await res.send(JSON.stringify({
      Result: response
    }))
  }
}