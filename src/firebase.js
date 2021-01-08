import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA1M0d7XBsQ29Yz08c4aw89KAzsJchqbvs",
    authDomain: "clone-a0f8e.firebaseapp.com",
    projectId: "clone-a0f8e",
    storageBucket: "clone-a0f8e.appspot.com",
    messagingSenderId: "929282022405",
    appId: "1:929282022405:web:42a1907cdaa39f7322506c"
  });

export const auth = firebaseConfig.auth();

export const db = firebaseConfig.firestore();

// import firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyA1M0d7XBsQ29Yz08c4aw89KAzsJchqbvs",
//   authDomain: "clone-a0f8e.firebaseapp.com",
//   projectId: "clone-a0f8e",
//   storageBucket: "clone-a0f8e.appspot.com",
//   messagingSenderId: "929282022405",
//   appId: "1:929282022405:web:42a1907cdaa39f7322506c"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };