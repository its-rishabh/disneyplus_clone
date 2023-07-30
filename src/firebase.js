import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHSK-F_HIwWNEiz42Nxd36txm7ce0v4EQ",
    authDomain: "disney-plus-clone-5cfb0.firebaseapp.com",
    projectId: "disney-plus-clone-5cfb0",
    storageBucket: "disney-plus-clone-5cfb0.appspot.com",
    messagingSenderId: "131515049242",
    appId: "1:131515049242:web:9924973453fbe702f1f8a3",
    measurementId: "G-P3LPT4BW2B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;