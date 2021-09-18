var firebaseConfig = {
    apiKey: "AIzaSyCTY1a9-co3QkY5bCNYGFX96YVNslGEPBo",
    authDomain: "kwitter-51dff.firebaseapp.com",
    databaseURL: "https://kwitter-51dff-default-rtdb.firebaseio.com",
    projectId: "kwitter-51dff",
    storageBucket: "kwitter-51dff.appspot.com",
    messagingSenderId: "975834755333",
    appId: "1:975834755333:web:d28479630e1ff93494476c",
    measurementId: "G-CJGD3D2VXE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }