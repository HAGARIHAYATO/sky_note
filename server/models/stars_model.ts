import express from "express"
const initializer = require("../config/database")
const db = initializer.firestoreInit()

module.exports = {
  getIndex: function(params: any): Array<any> {
    return db.collection("stars")
    .where('user_sub', '==', params.user_sub)
    .get()
    .then(starArray => {
      const array = starArray.docs.map(doc => doc.data());
      return array
    }).catch(err => {
      console.error(err)
    })
  },
  insert: async function(obj: any) {
    let dbStars = db.collection("stars");
    return await dbStars
      .add({
        lat: obj.lat,
        lng: obj.lng,
        date: obj.date,
        hour: obj.hour,
        min: obj.min,
        user_sub: obj.user_sub
      }).then((doc: any) => {
        console.log(doc)
        return doc.id
      }).catch(err => {
        console.error(err)
      })
  }
}