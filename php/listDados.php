<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=localhost;dbname=petshop";
$usuario = "root";
$senha = "alicinha";
try {
	$conexao = new PDO($host, $usuario, $senha);

	if(!$conexao){
		echo "Não foi possivel conectar com Banco de Dados!";
	}		

	$query = $conexao->prepare('SELECT * FROM `produto` order by idproduto asc');

		$query->execute();

		$out = "[";

		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"codigo": "'.$result["idproduto"].'",';
			$out .= '"nome": "'.$result["produto_nome"].'",';
			$out .= '"quantidade": "'.$result["produto_qtd"].'",';
			$out .= '"descricao": "'.$result["descricao"].'",';
			$out .= '"foto": "'.$result["produto_foto"].'",';
			$out .= '"valor": "'.$result["produto_valor"].'",';
			$out .= '"status": "'.$result["produto_status"].'",';
			$out .= '"criacao": "'.$result["produto_data_cadastro"].'"}';
		}
		$out .= "]";
		echo utf8_encode($out) ;



} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};
