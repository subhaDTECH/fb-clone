import firebase from 'firebase';
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAVhzKU22yPyXbS1shGSL5PrTSR6q5Vpz0",
    authDomain: "fb-clone-e2dff.firebaseapp.com",
    projectId: "fb-clone-e2dff",
    storageBucket: "fb-clone-e2dff.appspot.com",
    messagingSenderId: "378673449224",
    appId: "1:378673449224:web:e3edca2c3c5dd9287544bd",
    measurementId: "G-TG48Q3DGHZ"
});
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;