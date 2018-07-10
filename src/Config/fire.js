import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBATI7ItmDQ1XfwSewAdeSglw3RQGfdT3k",
    authDomain: "react-notes-21ac4.firebaseapp.com",
    databaseURL: "https://react-notes-21ac4.firebaseio.com",
    projectId: "react-notes-21ac4",
    storageBucket: "react-notes-21ac4.appspot.com",
    messagingSenderId: "970202950457"
  };
  var fire = firebase.initializeApp(config);
  export default fire;