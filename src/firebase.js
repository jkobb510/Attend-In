import firebase from 'firebase/app'
import 'firebase/auth'

// WHY THE FUCK ARENT ENV VARS WORKING.. will hard code for now
const app = firebase.initializeApp({
	apiKey: "AIzaSyBXCaerPaNERvsOH9WdKPNpnfSWfPGWkMQ", // process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "attend-in-dev.firebaseapp.com", // process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "attend-in-dev", // process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: "attend-in-dev.appspot.com", // process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "150609594645", // process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:150609594645:web:4ecbdb9c3a9e0d8cf5011c"// process.env.REACT_APP_FIREBASE_APP_ID

// 	REACT_APP_FIREBASE_API_KEY = AIzaSyBXCaerPaNERvsOH9WdKPNpnfSWfPGWkMQ
// REACT_APP_FIREBASE_AUTH_DOMAIN = attend-in-dev.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID = attend-in-dev
// REACT_APP_FIREBASE_STORAGE_BUCKET = attend-in-dev.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 150609594645
// REACT_APP_FIREBASE_APP_ID = 1:150609594645:web:4ecbdb9c3a9e0d8cf5011c
})

export const auth = app.auth()
export default app