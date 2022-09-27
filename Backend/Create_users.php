<?php
include_once ("Config.php");
$data = file_get_contents('php://input');
$request= json_decode($data);

if(isset($data) && !empty($data))
{
    $name= mysqli_real_escape_string($mysqli, trim($request->name));
    $prenom=mysqli_real_escape_string($mysqli, trim($request->prenom));
    $date=mysqli_real_escape_string($mysqli, trim($request->date));
    $genre=mysqli_real_escape_string($mysqli, trim($request->genre));
    $phone=mysqli_real_escape_string($mysqli, trim($request->phone));
    $mail=mysqli_real_escape_string($mysqli, trim($request->mail));
    $matricule=mysqli_real_escape_string($mysqli, trim($request->matricule));
    $arrondissement=mysqli_real_escape_string($mysqli, trim($request->arrondissement));
    $password=mysqli_real_escape_string($mysqli, trim($request->password));

    $sql="INSERT INTO `users` ('id',`Nom`, `Prenom`, `Date_naissance`, `Genre`, `Matricule`, `Arrondissement`, `Type_Users`, `Email`, 'phone', `Password`) VALUES(NULL,'${name}','${prenom}','${date}','${genre}','${matricule}','${arrondissement}','${type_users}','${mail}','${phone}','${password}');";
    if ($mysqli->query($sql) === TRUE) {
 
 
        $authdata = [
          'Nom' => $name,
          'Password' => $password,
          'Email' => $mail,
          'phone' => $phone,
          'Prenom' => $prenom,
          'Date_naissance' => $date,
          'Genre'=>$genre,
          'Matricule'=>$matricule,
          'Arrondissement'=>$arrondissement,
    
    
          'Id'=> mysqli_insert_id($mysqli)
        ];
        echo json_encode($authdata);
     
    }
}
?>