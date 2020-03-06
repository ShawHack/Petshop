<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Resquested-With');
header("Content-Type: application/json; charset=UTF-8");
date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

$nome = $objData->nome;
$qtd = $objData->qtd;
//$foto = $objData->foto;
$valor = $objData->valor;
$descricao = $objData->descricao;
//$idempresa = $objData->idempresa;
//$idusuario = $objData->idusuario;

$nome = stripslashes($nome);
$qtd = stripslashes($qtd);
//$foto = stripslashes($foto);
$valor = stripslashes($valor);
$descricao = stripslashes($descricao);
//$status = stripslashes($status);
//$idempresa = stripslashes($idempresa);
//$idusuario = stripslashes($idusuario);

$nome = trim($nome);
$qtd = trim($qtd);
//$foto = trim($foto);
$valor = trim($valor);
$descricao = trim($descricao);
//$idempresa = trim($idempresa);
//$idusuario = trim($idusuario);

$dados; 

require_once 'config.php';


if($conexao){
    $Sql = " insert into produto (produto_nome, produto_qtd, produto_foto, descricao, produto_valor, produto_status) values('".$nome."','".$qtd."','img_produtos/esgotado.jpg','".$descricao."','".$valor."', 'Ativo')";


    $query = $conexao->prepare($Sql);
    $query ->execute();
 
    $dados = array('mensage' => "Dados inseridos com sucesso.");
    echo json_encode($dados);
   
}else{
      $dados = array('mensage' => "Não foi possível inserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>