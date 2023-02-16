import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBY2_qLCcuvmzWzlbTJMDtH3ffwPeXe6i0",
    authDomain: "chatfirebase-25dbf.firebaseapp.com",
    projectId: "chatfirebase-25dbf",
    storageBucket: "chatfirebase-25dbf.appspot.com",
    messagingSenderId: "451710635584",
    appId: "1:451710635584:web:89ac8485e0d67a821659a5"
  };

  const app = firebase.initializeApp(firebaseConfig)

  const db = app.firestore()
  const auth = app.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }