import express from "express"

module.exports = {
  getIndex: function() {
    const array = [
      {date :"XXXX-XX-XX", hour: "20", min: "00"},
      {date :"YYYY-YY-YY", hour: "20", min: "00"},
      {date :"ZZZZ-ZZ-ZZ", hour: "20", min: "00"}
    ]
    return array
  }
}