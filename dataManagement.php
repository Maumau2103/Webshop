<?php
if(array_key_exists('Anmelden', $_POST)){
    logIN();
  
}
  echo "test";
function controllLogIn(){
    $uname    = $_POST['uName'];
    $password = $_POST['password'];

    $uData = fopen("uData.txt","test123")
    fclose($uData);
}

function logIn(){
    $uname    = $_POST['uName'];
    $serching = explode("@", $uname);
    if (strlen($serching)!=2){
        alert("an E-Mail has to have one @ and to end with a domaine!");
    } else {
        $serching2 = expload(".", $serching[1]);
        if (strlen($serching2)!=2){
            alert("an E-Mail has to have one @ and to end with a domaine!");    
        } else {
            $password = $_POST['password'];
            $_sESSION["thisSession"] = $uname;
            loadUser();
            
        }
    }  
}

function loaduser(){
        $uname1 
        if strlen($_SESSION["thisSession"])==0){
            $uname1 = "log in";
        } else $uname1 = $_SESSION["thisSession"];
        reload();
}

function test(){
    echo "test";
}
?>
