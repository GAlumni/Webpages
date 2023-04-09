//Getting user input
var RegNoBox = document.getElementById("RegNo");
var passBox = document.getElementById("pass");

// Buttons input
var LoginBtn = document.getElementById("LoginBtn");

// Firebase connection
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvcixpDb4BOIevoD9c4h8mDdGenk_3coE",
  authDomain: "g-alumni-352f2.firebaseapp.com",
  databaseURL: "https://g-alumni-352f2-default-rtdb.firebaseio.com",
  projectId: "g-alumni-352f2",
  storageBucket: "g-alumni-352f2.appspot.com",
  messagingSenderId: "639725044627",
  appId: "1:639725044627:web:af0d3fc58897764a911e66",
  measurementId: "G-18B0GX5D5T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, ref, set, child, get}
from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const db = getDatabase();
// alert("Hii");

 function AuthenticateUser(){
  if (RegNoBox.value == "" || passBox.value == "") {
    alert("Both fields are mandatory!!");
    return;
  }
  const dbref = ref(db)
  get(child(dbref,"SignUpTable/" + RegNoBox.value)).then((snapshot)=>{
    if(snapshot.exists()){
      var dbemail = snapshot.val().Email;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, dbemail, passBox.value)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          window.location.href = "Dashboard.html";
       })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Wrong Password");
      });
    }
    else{
      window.alert("Invalid Registration Number or Password")
    }  
  });
}

//  function decPass(dbpass){
//   var pass12 = CryptoJS.AES.decrypt(dbpass.value,pass.value);
//   return pass12.toString(CryptoJS.enc.Utf8);
//  }

// Event Listner
LoginBtn.addEventListener("click", AuthenticateUser);
passBox.addEventListener("keyup", (e) =>{
  if(e.keyCode === 13){
    e.preventDefault();
    LoginBtn.click();
  }
});
document.getElementById("submitBtn").addEventListener("click", myFunction);  
    function myFunction() {  
      window.location.href="ForgetPasswordPage.html";  
    }