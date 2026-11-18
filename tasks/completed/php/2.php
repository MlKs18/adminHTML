<?php
	setcookie("name", "cat", time() + (60*60*24*30));
    if (isset($_COOKIE['name'])) {
    $name = $_COOKIE['name'];
    echo "Привет, name " . htmlspecialchars($name) . "!";
} else {
    echo "Кука 'name' не найдена.";
}
?>