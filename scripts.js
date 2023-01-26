   function validateName(uname){
    var serching = uname.split("@");
    if (serching.length!=2){
        return false;
    } else {
        var serching2 = serching[1].split(".");
        if (serching2[0].length==0 | serching2[1].length==0 | serching2.length!=2 )  {
            return false;     
        } else return true;
    }
}

function validatePassword(password){
    if (password.length<6){
        return false;
    } else return true;
}

function get(){
    var uname; 
    alert("test");
    if (sessionStorage.length==0){
        uname = "Anmelden";
    } else uname = sessionStorage.getItem("email");
    document.getElementById("Anmelden").innerHTML = uname;
    reload();
}

function test(){
    var user = document.getElementById("email");
    sessionStorage.setItem("email","test");
    location.href = 'index.html';

}
