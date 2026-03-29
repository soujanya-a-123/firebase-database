console.log("main js is working")
var firebaseConfig = {
    apiKey: "AIzaSyC9LgwRgsqNK4ZOap-_FJlYZfSXhHl_SLM",
    authDomain: "trial3-202f7.firebaseapp.com",
    projectId: "trial3-202f7",
    storageBucket: "trial3-202f7.firebasestorage.app",
    messagingSenderId: "72298116374",
    appId: "1:72298116374:web:2414bb4f41d89da7decc37",
    measurementId: "G-KS5GDKW79F"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
function save(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var username = document.getElementById("username").value
    var favorite_food = document.getElementById("favorite_food").value

    database.ref("users/" + username).set({
        email: email,
        password: password,
        username: username,
        favorite_food: favorite_food,
    })
    alert("data saved in database")
}

function get(){
    var username = document.getElementById("username").value
    var user_ref = database.ref("users/" + username)
    user_ref.on("value", function(
        snapshot){
            var data = snapshot.val()
            alert(data.email)
            alert(data.email+data.password)
    })
}