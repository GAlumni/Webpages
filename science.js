document.getElementById("Internships").addEventListener("click",fun1);
        document.getElementById("CompVisit").addEventListener("click",fun2);
        let a = "SCIENCE";
        localStorage.setItem("passValue",a);
        
        function fun1(){
            window.location.href = "InternshipTable.html";
        }
        function fun2() {
            window.location.href = "CompanyTable.html";
        }