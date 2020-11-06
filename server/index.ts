import express from "express";

const app = express();

app.get("/", function(req: any, res: any) {
  const response = JSON.stringify({
    Status: 200
  })
  res.send(response);
});

module.exports = {
  path: "/api/",
  handler: app
};