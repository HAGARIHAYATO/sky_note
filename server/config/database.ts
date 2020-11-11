require("firebase/firestore");
const firebase = require("firebase");

module.exports = {
  firestoreInit: function() {
    firebase.initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID
    });
    
    return firebase.firestore();
  }
}