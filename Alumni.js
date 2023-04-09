// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxRiNJNkXeJbtZmRGQOT9MDohOvJtFzls",
  authDomain: "alumnitable.firebaseapp.com",
  databaseURL: "https://alumnitable-default-rtdb.firebaseio.com",
  projectId: "alumnitable",
  storageBucket: "alumnitable.appspot.com",
  messagingSenderId: "989258547701",
  appId: "1:989258547701:web:a5bad788ae47d7a460e0bc",
  measurementId: "G-QRYKGV8RVX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getDatabase,
  ref,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

const db = getDatabase();

var tbody = document.getElementById("tbody1");
var call = localStorage.getItem("passValue");
var Sno = 0;

function AddItemToTable(Name, Status, Lid) {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let a;

  if (Lid === "NA") {
    a = document.createElement("td");
    a.innerHTML = "--";
  } else{
    a=document.createElement("a");
    a.href = Lid;
    a.target = "_blank";
    a.innerText = "Click Here"
  }

  td1.innerHTML = ++Sno;
  td2.innerHTML = Name;
  td3.innerHTML = Status;
  

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(a);

  tbody.appendChild(trow);
}

function AddAllItemsToTable(NTable) {
  Sno = 0;
  tbody.innerHTML = "";
  NTable.forEach((element) => {
    AddItemToTable(element.Name, element.Status, element.Linkdln);
  });
}

function GetAllDataOnce() {
  const dbRef = ref(db);
  get(child(dbRef, call)).then((snapshot) => {
    var NTable = [];
    snapshot.forEach((childSnapshot) => {
      NTable.push(childSnapshot.val());
    });
    AddAllItemsToTable(NTable);
  });
}
window.onload = GetAllDataOnce;