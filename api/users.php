<?php
/**
 * Created by PhpStorm.
 * User: XypêrSonic
 * Date: 04.05.2018
 * Time: 19:10
 */

header('Access-Control-Allow-Origin: *');
require  "localh.connection.class.php";
$conn = new Database(DB_SERVER, DB_USER, DB_PASS, DB_DATABASE);
$link = $conn->connect();
$users = $conn->getData("kullanicilar");
echo json_encode($users);
?>