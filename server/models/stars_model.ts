import express from "express"

module.exports = {
  getIndex: function() {
    const array = [
      {lat: "0", lng: "0", date :"XXXX-XX-XX", hour: "20", min: "00"},
      {lat: "65", lng: "20", date :"YYYY-YY-YY", hour: "20", min: "00"},
      {lat: "-30", lng: "40", date :"ZZZZ-ZZ-ZZ", hour: "20", min: "00"}
    ]
    return array
  }
}