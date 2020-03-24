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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  //use userAuth library to query for userRef object
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
   if (!snapShot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();
     try {
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       });
     } catch (error) {
       console.log('error creating user', error.message);
     }
   }
 
   return userRef;
 };

 export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = firestore.collection(collectionKey);

   const batch = firestore.batch();
   objectsToAdd.forEach(obj => {
     const newDocRef = collectionRef.doc();
     batch.set(newDocRef, obj);
   });

   await batch.commit();
 }

 export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
    const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
      const { title, items } = docSnapshot.data();
    
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items
    };
 });

return transformedCollection.reduce((accumulator, collection) => {
   accumulator[collection.title.toLowerCase()] = collection;
   return accumulator;
 }, {});
};
 
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;