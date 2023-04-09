var stdNo=0;
        var tbody=document.getElementById('tbody1');
        var call = localStorage.getItem("passValue");
        
        function AddItemToTable(CName,JRole,TSkills,RMon,Pack){
            
            let trow=document.createElement("tr");
            let td1=document.createElement("td");
            let td2=document.createElement("td");
            let td3=document.createElement("td");
            let td4=document.createElement("td");
            let td5=document.createElement("td");
            let td6=document.createElement("td");

            td1.innerHTML=++stdNo;
            td2.innerHTML=CName;
            td3.innerHTML=JRole;
            td4.innerHTML=TSkills;
            td5.innerHTML=RMon;
            td6.innerHTML= Pack;

            trow.appendChild(td1);
            trow.appendChild(td2);
            trow.appendChild(td3);
            trow.appendChild(td4);
            trow.appendChild(td5);
            trow.appendChild(td6);

            tbody.appendChild(trow);

        }

        function AddAllItemsToTable(Com_Table){
            stdNo=0;
            tbody.innerHTML="";
            Com_Table.forEach(element => {
                AddItemToTable(element.CompanyName,element.JobRole,element.TechnicalSkills,element.RMon,element.Package);
            });
        }
  
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyDxUVdsa48sVACNVOAAOWzQRMOqOLyDfoU",
          authDomain: "companydata-c196c.firebaseapp.com",
          projectId: "companydata-c196c",
          storageBucket: "companydata-c196c.appspot.com",
          messagingSenderId: "1003935607451",
          appId: "1:1003935607451:web:d9e8c3dbeb940161b7743e"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        import {
        getDatabase,
        ref,
        get,
        child
      } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

        const db=getDatabase();

        function GetAllDataOnce(){
            const dbRef=ref(db);
            get(child(dbRef,call))
            .then((snapshot)=>{
                var com_table=[];
                snapshot.forEach(childSnapshot => {
                    com_table.push(childSnapshot.val());
                });
                AddAllItemsToTable(com_table);
            })
        }

        window.onload=GetAllDataOnce;