import 'dotenv/config';

import firebase from 'firebase';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';

const myFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBIeLb6qrJz9zuIsM8nsvogDvyHIFMbhDo',
  authDomain: 'meu-deck-pokemon.firebaseapp.com',
  databaseURL: 'https://meu-deck-pokemon-default-rtdb.firebaseio.com',
  projectId: 'meu-deck-pokemon',
  storageBucket: 'meu-deck-pokemon.appspot.com',
  messagingSenderId: '1002323149800',
  appId: '1:1002323149800:web:18745d3b1ef019292c9a5d',
  measurementId: 'G-HX26PKHB0Z',
});

/// erro esta messa parte, pqp;
const rsf = new ReduxSagaFirebase(myFirebaseApp);

// firebase.analytics();
export default rsf;
