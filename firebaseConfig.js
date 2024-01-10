import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: '***REMOVED***',
  authDomain: 'travelplanai-a53f4.firebaseapp.com',
  projectId: 'travelplanai-a53f4',
  storageBucket: 'travelplanai-a53f4.appspot.com',
  messagingSenderId: '48273391374',
  appId: '1:48273391374:web:56acf2c6fca721ff25e15f',
  measurementId: 'G-FPNZRQW974',
  databaseURL: 'https://travelplanai-a53f4-default-rtdb.firebaseio.com',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const FIREBASE_DB = getDatabase(FIREBASE_APP);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
