import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDHzPjgFTBpFwmLw6nWjGWDdmkugRCHEFw",
    authDomain: "whatsapp-d2e84.firebaseapp.com",
    projectId: "whatsapp-d2e84",
    storageBucket: "whatsapp-d2e84.appspot.com",
    messagingSenderId: "843056885271",
    appId: "1:843056885271:web:881d8b8611befbf8d63652"
};

// initialize app if initialized app is not found
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };