import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCKOlCV4bH2XffznHqTpR4WUPMoaq80NFY",
    authDomain: "royal-clothing-ad232.firebaseapp.com",
    databaseURL: "https://royal-clothing-ad232.firebaseio.com",
    projectId: "royal-clothing-ad232",
    storageBucket: "royal-clothing-ad232.appspot.com",
    messagingSenderId: "753111115146",
    appId: "1:753111115146:web:063385f0923b20d092d473",
    measurementId: "G-D2957MJJ6B"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;