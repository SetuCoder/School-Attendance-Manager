 import firebase from 'firebase';
 
 const firebaseConfig = {
    apiKey: "AIzaSyCbkQ77byg9s8XeVK6cq0nhOIgatZkOrIA",
    authDomain: "school-attendance-a391f.firebaseapp.com",
    databaseURL: "https://school-attendance-a391f.firebaseio.com",
    projectId: "school-attendance-a391f",
    storageBucket: "school-attendance-a391f.appspot.com",
    messagingSenderId: "570347073385",
    appId: "1:570347073385:web:5c1769fdbf8eeeb1d657f8",
    measurementId: "G-VH0973VS32"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();