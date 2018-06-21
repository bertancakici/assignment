<?php
/*
* Mysql database class - only one connection alowed
*/

define('DB_SERVER', "*****");
define('DB_USER', "*****");
define('DB_PASS', "*****");
define('DB_DATABASE', "*****");

class Database
{

    var $host = ""; //database server
    var $user = ""; //database login name
    var $pass = ""; //database login password
    var $database = ""; //database name

    public $link;

    public function Database($host, $user, $pass, $database)
    {
        $this->host = $host;
        $this->user = $user;
        $this->pass = $pass;
        $this->database = $database;


    }

    public function connect()
    {
        $this->link = new mysqli( $this->host, $this->user, $this->pass , $this->database);
        mysqli_query($this->link, 'SET NAMES UTF8');
        mysqli_query($this->link, "SET CHARACTER SET utf8");
        mysqli_query($this->link, "SET COLLATION_CONNECTION = 'utf8_unicode_ci' ");
        if (mysqli_connect_error()) {
            echo mysqli_connect_error();
            exit();
        } else
            return $this->link;

    }

    public function getData($table)
    {
        $stmt = $this->link->prepare("SELECT * FROM $table");
        if ($stmt->execute()) {
            $result = $stmt->get_result();
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $row = array_map('stripslashes', $row);
                $dataArray[] = $row;
            }
        }
        return $dataArray;
    }

    public function addUser($db_name, $db_surname, $db_age, $db_identity)
    {
        $stmt = $this->link->prepare("INSERT INTO kullanicilar (ad,soyad,yas,tc) VALUES('$db_name','$db_surname','$db_age','$db_identity')");
        return $stmt->execute(); // boolean çeviriyor
    }

    public function userDetail($db_id)
    {
        $stmt = $this->link->prepare("SELECT * FROM kullanicilar WHERE id = $db_id");
        if ($stmt->execute()) {
            $result = $stmt->get_result();
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $row = array_map('stripslashes', $row);
                $dataArray[] = $row;
            }
        }
        return $dataArray;
    }

    public function deleteUser($db_id)
    {
        $stmt = $this->link->prepare("DELETE FROM kullanicilar WHERE id = '$db_id' ");
        return $stmt->execute(); // boolean çeviriyor
    }

    public function updateUser($db_id, $ad, $soyad, $yas, $tc)
    {
        $stmt = $this->link->prepare("UPDATE kullanicilar SET ad='$ad',soyad='$soyad',yas='$yas',tc='$tc' WHERE id = '$db_id' ");
        return $stmt->execute(); // boolean çeviriyor
    }
}

?>
