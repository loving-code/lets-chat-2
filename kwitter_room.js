
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
