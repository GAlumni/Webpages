import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

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

    document.getElementById("btn").addEventListener("click",function(){
        var email = document.getElementById("email");
        const auth = getAuth(app);
        sendPasswordResetEmail(auth, email.value)
        .then(() => {
            // Password reset email sent!
            // ..
            window.alert("Reset Password Sent...")
        })
        .catch((error) => {
            alert("Please Enter Your Valid Email")
    // ..
          });
    })