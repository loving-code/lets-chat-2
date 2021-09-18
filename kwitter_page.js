//YOUR FIREBASE LINKS
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

    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebaseConfig.database().ref(room_name).push({
                name:user_nmae,
                message:msg,
                like:0
          });
    }
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
firebase.analytics();