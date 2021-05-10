import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBxLHoSOU7BEEC7bS8cYSLNhGnoFIUMxeg",
  authDomain: "whatsapp-28bd1.firebaseapp.com",
  projectId: "whatsapp-28bd1",
  storageBucket: "whatsapp-28bd1.appspot.com",
  messagingSenderId: "254007986097",
  appId: "1:254007986097:web:e54076219d0196bf855f90"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};