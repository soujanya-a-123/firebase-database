console.log("this js is working")
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
const auth = firebase.auth()
const database = firebase.database();

function register(){
    email = document.getElementById("email").value
    password = document.getElementById("passcode").value;
    if(validate_email(email) == false || validate_password(password) == false){
        alert("something is wrong in email or passcode")
        return
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then(function(){
        var user = auth.currentUser
        var database_ref = database.ref()
        var user_data = {
            email: email,
            password: password,
            last_login: Date.now()
        }
        database_ref.child('users/' + user.uid).set(user_data)
        alert("signed up now login")
    })
    .catch(function(error){
        var error_code = error.code
        var error_message = error.message
        alert(error_message)
    })
}


function login(){
    email = document.getElementById("email").value
    password = document.getElementById("passcode").value;
    if(validate_email(email) == false || validate_password(password) == false){
        alert("something is wrong in email or passcode")
        return
    }
    auth.signInWithEmailAndPassword(email,password)
    .then(function(){
        var user = auth.currentUser
        var database_ref = database.ref()
        var user_data = {
            last_login: Date.now()
        }
        database_ref.child('users/' + user.uid).update(user_data)
        alert("logged in")
    })
    .catch(function(error){
        var error_code = error.code
        var error_message = error.message
        alert(error_message)
    })

}

function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) == true){
        return true
    }else{
        return false
    }
}
function validate_password(passcode){
    if(passcode < 6){
        return false
    }else{
        return true
    }           
}
function validation_field(field){
    if(field == null){
        return false
    }
    if(field.length <= 0){
        return false
    }else{
        return true
    }
}

