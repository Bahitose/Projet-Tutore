<?php
include "Config.php";
$input= file_get_contents('php://input');
$data= json_decode($input, true);
$message= array();
$name=$data['name'];
$prenom=$data['prenom'];
$date=$data['date'];
$genre=$data1['genre'];
$nationnali=$data['nationnali'];
$phone=$data['phone'];
$mail=$data['mail'];
$matricule=$data['matricule'];
$arrondissement=$data['arrondissement'];
$password=$data['password'];
$id= $_GEET['id'];

$q= mysqli_query($con, "UPDATE `users` SET(`Nom`,`Prenom`,`Date_naissance`,`Genre`,`Matricule',`Arrondissement',`Type_Users`,`Email','Phone`,`Password`) VALUES ('$name','$prenom','$date','$genre','$matricule','$arrondissement','','$mail','$phone','$password') WHERE 'id'='{$id}' LIMIT 1");

if($q){
    http_response_code(201);
    $message['status']="Successe";
}else{
    http_response_code(422);
    $message['status']="Error";
}
echo json_encode($message);
echo mysqli_error($con);