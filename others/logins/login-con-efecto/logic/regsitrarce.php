<?php
include('conec.php');
$con= conectar();
session_start();

$nombre = $_POST['nombre'];
$pass = $_POST['contra'];
$n2 = $_POST['esta'];

if ($pass == $n2){
    $q = "SELECT user FROM logins WHERE user='$nombre'";
    $c = mysqli_query($con, $q);

    if (mysqli_num_rows($c) >0 )  {
        echo 'el usurio ya existe prueva con otro nombre';
    }
    elseif (mysqli_num_rows($c) == 0){
        date_default_timezone_set('America/Lima');
        $fecha= date('Y,m,d');
        $user=$nombre.'@vech.com';
        $pasin= md5($pass);
        $insertar = " INSERT INTO logins VALUES ('', '$user', '$pasin','$fecha')";
        $eje = mysqli_query($con, $insertar);
    }
    else{
        echo'algo salio mal';
    }
}
elseif ($pass != $n2){
    echo'las contraseñas no coinsiden';
    echo' vuelva a intentarlo';
}
else{
    echo'algo salio mal lero lero';
}
?>