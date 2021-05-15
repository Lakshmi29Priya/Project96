import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAZMd9WYeEbS7lyaARNidQV9FJKAWzAlhA',
  authDomain: 'booksanta-8219d.firebaseapp.com',
  projectId: 'booksanta-8219d',
  storageBucket: 'booksanta-8219d.appspot.com',
  messagingSenderId: '399141272910',
  appId: '1:399141272910:web:6e0a765b5ef387db1a721f',
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
