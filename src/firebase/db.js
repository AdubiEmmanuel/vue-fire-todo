import firebase from 'firebase';
import 'firebase/firestore';


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBve1BuXExsZQ4iP_uaye9RzJLQNsGlGKY",
    authDomain: "vue-fire-todo-c55dc.firebaseapp.com",
    databaseURL: "https://vue-fire-todo-c55dc.firebaseio.com",
    projectId: "vue-fire-todo-c55dc",
    storageBucket: "vue-fire-todo-c55dc.appspot.com",
    messagingSenderId: "435343759666",
    appId: "1:435343759666:web:717137ab1a7ae967d11f2b"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();
