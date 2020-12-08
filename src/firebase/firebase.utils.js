import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAUFxibxlzLaV8BLu2BCNxmNr1TkhXap-0",
  authDomain: "royal-clothing-ced54.firebaseapp.com",
  projectId: "royal-clothing-ced54",
  storageBucket: "royal-clothing-ced54.appspot.com",
  messagingSenderId: "578135284917",
  appId: "1:578135284917:web:ef709b67fe0610e17732fc",
  measurementId: "G-4G015NPNGH",
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
