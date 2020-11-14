import firebase from "firebase";
import dotenv from "dotenv";
dotenv.config()

module.exports = {
  firestoreInit: function() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID
      });
    }
    
    return firebase.firestore();
  }
}