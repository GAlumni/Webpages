
var fnameBox = document.getElementById("fname");
var lnameBox = document.getElementById("lname");
var regnoBox = document.getElementById("regno");
var emailBox = document.getElementById("email");
var passwordBox = document.getElementById("password");
var cpasswordBox = document.getElementById("cpassword");


document.getElementById("submitData").addEventListener("click", checkPassword);;


var letters = /^[A-Za-z]+$/;  
var email_val = /^([a-zA-Z0-9_\.\-])+\@(([gitam\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, ref, set}
from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const db = getDatabase();


function checkPassword(){
  if(fnameBox.value==''||lnameBox.value==''||regnoBox.value==''||emailBox.value==''||passwordBox.value==''||cpasswordBox.value==''){  
    alert("Enter each details correctly");
  }
  else if(!(letters.test(fnameBox.value))&&(letters.test(lnameBox.value))){
    alert('Name is incorrect must contain alphabets only'); 
  }  
  else if (!email_val.test(emailBox.value)){
    alert('Invalid email format please enter valid email id');  
  }  
  else if(passwordBox.value!=cpasswordBox.value){  
    alert("Passwords not matching");  
  }  
  else if(regnoBox.value.length < 12){  
    alert("RegNo minimum length is 12");  
  }  
  else if((passwordBox.value.length > 12)&&(passwordBox.value.length<6)){  
    alert("Password length must be between 6 to 12");  
  }  
  else if(passwordBox.value != cpasswordBox.value){
    alert("Password Fields must be same...");
  }
  else{  

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, emailBox.value, passwordBox.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("Success!!..."); 
    alert("Verification Link Sent");
    sendEmailVerification(auth.currentUser)
    .then(() => {
    // Email verification sent!
    // ...
    
    });
    insertData();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert("Email Already Registered...");
  }); 
    
  } 
}

// Inserting data when validation is done.

function insertData() {
  set(ref(db, "SignUpTable/" + regnoBox.value),{
    RegistrationNo: regnoBox.value,
    FirstName: fnameBox.value,
    LastName: lnameBox.value,
    Email: emailBox.value
  })
    .then(() => {
      window.location = "home.html";
    })
    .catch((error) => {
      alert("Error!!.. Try Again" + error);
    });
}


