<?php
session_start();
if(!isset($_SESSION['user']) ) {
    $_SESSION['user']= 1;
    echo 'Добро пожаловать!';
} else {
    $_SESSION['user']++;
    echo 'Вы у нас не первый раз';
}
?>


