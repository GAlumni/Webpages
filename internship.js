var stdNo=0;
        var tbody=document.getElementById('tbody1');
        var call = localStorage.getItem("passValue");
        
        function AddItemToTable(duration,companyname,eligibility,link,stripend){
            
            let trow=document.createElement("tr");
            let td1=document.createElement("td");
            let td2=document.createElement("td");
            let td3=document.createElement("td");
            let td4=document.createElement("td");
            let td5=document.createElement("td");
            let a;

            if (link === "NA") {
                a = document.createElement("td");
                a.innerHTML = link;
            } else{
                a=document.createElement("a");
                a.href = link;
                a.target = "_blank";
                a.innerText = "Click Here"
            }

            td1.innerHTML=++stdNo;
            td2.innerHTML=companyname;
            td3.innerHTML=duration;
            td4.innerHTML=stripend;
            td5.innerHTML=eligibility;
            

            trow.appendChild(td1);
            trow.appendChild(td2);
            trow.appendChild(td3);
            trow.appendChild(td4);
            trow.appendChild(td5);
            trow.appendChild(a);

            tbody.appendChild(trow);


        }

        function AddAllItemsToTable(Eng_Internship){
            stdNo=0;
            tbody.innerHTML="";
            Eng_Internship.forEach(element => {
                AddItemToTable(element.Duration,element.CompanyName,element.Eligibility,element.Link,element.Stripend);
            });
        }


        
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyDSmyHMoVZ7qT-hGlwm3Y_K2qkhRqBgG9I",
          authDomain: "internship-8ce86.firebaseapp.com",
          projectId: "internship-8ce86",
          storageBucket: "internship-8ce86.appspot.com",
          messagingSenderId: "895912160786",
          appId: "1:895912160786:web:794930a26ef44dfd5d72cb"
        };
      

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import{getDatabase,ref,set,remove,get,child}
        from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

        const db=getDatabase();

        function GetAllDataOnce(){
            const dbRef=ref(db);
            get(child(dbRef,call))
            .then((snapshot)=>{
                var eng_interns=[];
                snapshot.forEach(childSnapshot => {
                    eng_interns.push(childSnapshot.val());
                });
                AddAllItemsToTable(eng_interns);
            })
        }

        window.onload=GetAllDataOnce;