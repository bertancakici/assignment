﻿<?php
/**
 * Created by PhpStorm.
 * User: XypêrSonic
 * Date: 04.05.2018
 * Time: 19:10
 */

header('Access-Control-Allow-Origin: *');
$id = $_GET['id'];
$ad = $_GET['ad'];
$soyad = $_GET['soyad'];
$yas = $_GET['yas'];
$tc = $_GET['tc'];

require "localh.connection.class.php";
$conn = new Database(DB_SERVER, DB_USER, DB_PASS, DB_DATABASE);
$link = $conn->connect();
$updateResult = $conn->updateUser($id,$ad,$soyad,$yas,$tc);
echo json_encode($updateResult);
?>