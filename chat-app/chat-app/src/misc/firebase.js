import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDkUyxakqx2eE8TWN7MyUGDDpxY5gDwIhA',
  authDomain: 'chat-web-app-6dd1f.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-6dd1f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chat-web-app-6dd1f',
  storageBucket: 'chat-web-app-6dd1f.appspot.com',
  messagingSenderId: '580046552476',
  appId: '1:580046552476:web:d3ac95fbf3c9dd1bcbdc59',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
