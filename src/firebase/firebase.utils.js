import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC-ofZAkLAZsWDDEFZBwwR1y5LE7oh-kkU",
  authDomain: "royalclothing-16e9f.firebaseapp.com",
  projectId: "royalclothing-16e9f",
  storageBucket: "royalclothing-16e9f.appspot.com",
  messagingSenderId: "711978703425",
  appId: "1:711978703425:web:8c7b7c94719e3b1fcac4c0",
  measurementId: "G-4F0P09E79G",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
