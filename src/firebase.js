import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBt7kx0C5poqSngXg-X1udvjx2EQoldiMY",
    authDomain: "kahoot-d433f.firebaseapp.com",
    projectId: "kahoot-d433f",
    storageBucket: "kahoot-d433f.appspot.com",
    messagingSenderId: "195574857193",
    appId: "1:195574857193:web:2626772fa59850d8189f78"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore()
const auth = firebase.auth()
const storage=firebase.storage()
export { auth, firestore,storage }