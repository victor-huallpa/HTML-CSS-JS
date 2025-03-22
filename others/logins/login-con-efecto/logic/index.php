<?php 
include ("conec.php");
$conect = conectar();

session_start();
$email=$_POST['user'];
$pass=$_POST['pass'];

$q = "SELECT * FROM logins WHERE user = '$email' and pass ='$pass'";
$consultation = mysqli_query($conect, $q);

if(mysqli_num_rows($consultation) > 0){
    header('location:../../../header/index.html');
    // echo 'BIENVENIDO AMICO';
}
else {
    echo 'ALGO SALIO MAL';
}
?>