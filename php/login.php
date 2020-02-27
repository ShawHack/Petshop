<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=localhost;dbname=petshop";
$usuario = "root";
$senha = "alicinha";

    if(isset($_GET["email"]) || isset($_GET["senha"]) ){
        if(!empty($_GET["email"]) || !empty($_GET["senha"])  ){
    
            $conexao = new PDO($host, $usuario, $senha);
    
            $email= $_GET["email"];
            $senha= $_GET["senha"];

	$sql = $conexao->prepare("SELECT * FROM usuario where usuario_email='$email'  and usuario_senha='$senha'");

		$sql->execute();

            $outp = "";
            if($rs=$sql->fetch()) {
                if ($outp != "") {$outp .= ",";}
                $outp .= '{"idusuario":"'  . $rs["idusuario"] . '",';
                $outp .= '"nome":"'   . $rs["usuario_nome"]        . '",';
                $outp .= '"email":"'   . $rs["usuario_email"]        . '",';
                $outp .= '"senha":"'   . $rs["usuario_senha"]        . '",';
                $outp .= '"nivel":"'   . $rs["usuario_nivel"]        . '",';
                $outp .= '"status":"'   . $rs["usuario_status"]        . '",';
                $outp .= '"data_cadastro_user":"'. $rs["usuario_data_cadastro"]     . '"}';

                $outp ='{"msg": {"logado": "sim", "texto": "logado com sucesso!"}, "dados": '.$outp.'}';
            }else{
            
                $outp ='{"msg": {"logado": "nao", "texto": "login ou senha invalidos!"}, "dados": {'.$outp.'}}';
                
            }
		
        echo utf8_encode($outp); 
			
    }
}

?>