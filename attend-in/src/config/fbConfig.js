import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDob5zaBHpkfoXZu94memgdcp1qO7fcsgI",
  authDomain: "tester-8cd27.firebaseapp.com",
  projectId: "tester-8cd27",
  storageBucket: "tester-8cd27.appspot.com",
  messagingSenderId: "443804159950",
  appId: "1:443804159950:web:638a905e7dcbf263ca659f",
  measurementId: "G-YD5NNXSQME"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase