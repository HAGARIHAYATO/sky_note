import firebase from "firebase"
import { IParams, IQuery, IResID, IStar } from "../../server"
const initializer = require("../config/database")
const db = initializer.firestoreInit()

module.exports = {
  getIndex: function(params: IParams): Array<IStar> {
    return db.collection("stars")
    .where('user_sub', '==', params.user_sub)
    .get()
    .then((starArray: firebase.firestore.QuerySnapshot) => {
      const array = starArray.docs.map(doc => doc.data());
      return array
    }).catch((err: Error) => {
      console.error(err)
    })
  },
  insert: async function(obj: IQuery) {
    let dbStars = db.collection("stars");
    return await dbStars
      .add({
        lat: obj.lat,
        lng: obj.lng,
        date: obj.date,
        hour: obj.hour,
        min: obj.min,
        user_sub: obj.user_sub
      }).then((doc: IResID) => {
        return doc.id
      }).catch(err => {
        console.error(err)
      })
  }
}