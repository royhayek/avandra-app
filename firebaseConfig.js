import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: '***REMOVED***',
  authDomain: 'avandra-f6c62.firebaseapp.com',
  projectId: 'avandra-f6c62',
  storageBucket: 'avandra-f6c62.appspot.com',
  messagingSenderId: '860918187904',
  appId: '1:860918187904:web:d7e09d71bb27ed6c8ba365',
  measurementId: 'G-P0CVVNRK3F'
};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const FIREBASE_DB = getDatabase(FIREBASE_APP);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
