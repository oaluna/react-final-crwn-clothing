import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlBpPPDValMp7x1Cy_QkA4tgExDKGmG2s",
    authDomain: "crwn-db-f011f.firebaseapp.com",
    databaseURL: "https://crwn-db-f011f.firebaseio.com",
    projectId: "crwn-db-f011f",
    storageBucket: "crwn-db-f011f.appspot.com",
    messagingSenderId: "112375008249",
    appId: "1:112375008249:web:544dfb34eb763b71638b28",
    measurementId: "G-8PD92QD4P6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;