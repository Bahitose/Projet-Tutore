<?php
include "Config.php";
$data= array();
$id= $_GET['id'];
$q= mysqli_query($con, "SELECT * FROM'users' WHERE 'id'=$id LIMIT 1");
while($row=mysqli_fetch_object($q)) {
    $data[]=$row;
}
echo json_encode($data);
echo mysqli_error($con);