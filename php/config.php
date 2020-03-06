<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');

//$host = "mysql:host=mysql669.umbler.com;dbname=pantpetshop";
//$usuario = "saulo";
//$senha = "alicinha";


$host = "mysql:host=localhost;dbname=petshop";
$usuario = "root";
$senha = "alicinha";

$conexao = new PDO($host, $usuario, $senha);

?>