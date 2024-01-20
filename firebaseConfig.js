import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "***REMOVED***",
  authDomain: "trippify-4c3bd.firebaseapp.com",
  projectId: "trippify-4c3bd",
  storageBucket: "trippify-4c3bd.appspot.com",
  messagingSenderId: "1056052970187",
  appId: "1:1056052970187:web:4830cee2eacabb5f4a914e",
  measurementId: "G-9NE22K3RYB",
  databaseURL: 'https://trippify-4c3bd-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const FIREBASE_DB = getDatabase(FIREBASE_APP);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
