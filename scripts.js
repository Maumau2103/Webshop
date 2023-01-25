    function logIn(){
        var uname = document.getElementById("uName").value;
        var password = document.getElementById("password").value;
        sessionStorage.setItem("uName",uname);
        loadUser();
    }
    function loadUser(){
        var uname1 
        if (sessionStorage.length==0){
            uname1 = "log in";
        } else uname1 = sessionStorage.getItem("uName");
        document.getElementById("Anmelden").innerHTML = uname1;
        reload();
    }
   
