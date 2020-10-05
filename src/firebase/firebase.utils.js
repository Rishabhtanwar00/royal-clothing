import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config ={
  apiKey: "AIzaSyAeMDdbIHXJu667vhR-IfSzndTkIvGZBSA",
  authDomain: "royalclthng.firebaseapp.com",
  databaseURL: "https://royalclthng.firebaseio.com",
  projectId: "royalclthng",
  storageBucket: "royalclthng.appspot.com",
  messagingSenderId: "714232075673",
  appId: "1:714232075673:web:2f9697f8b2e6baf089ef08",
  measurementId: "G-194YE947ZK"
  };


export const createUserProfileDocument = async (userAuth, additionalData) =>{

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const{ displayName, email } = userAuth;
    const createdAt = new Date();

    try{
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })
    }
    catch(error){
        console.log('error creating user',error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;