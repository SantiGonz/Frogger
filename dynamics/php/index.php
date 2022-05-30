<?php

    setcookie("galleta", "Tiempo record", time() + 3600 ); 
    // echo $_COOKIE["galleta"]; 
//cookie llegará desde un elemento html en js  
    $cookie = (isset($_COOKIE["galleta"]) && $_COOKIE["galleta"] !=="")? $_COOKIE["galleta"]:false; 

    if($cookie){
        echo "El tiempo récord es: ".$cookie; 
    } else{
        echo "No se ha podido almacenar su tiempo récord"; 
    }
?>