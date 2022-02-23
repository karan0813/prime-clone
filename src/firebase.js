import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBw_5ueUCB7MJlkxpNLI-eTjcV3S_Yw_yc",
  authDomain: "prime-app-898ee.firebaseapp.com",
  projectId: "prime-app-898ee",
  storageBucket: "prime-app-898ee.appspot.com",
  messagingSenderId: "145638189804",
  appId: "1:145638189804:web:8b9de6a339983e24f093c9",
  measurementId: "G-RFM516MSGM"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth}
  