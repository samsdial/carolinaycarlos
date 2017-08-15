<?php
	$response = array();
	$nameMessage = (isset($_REQUEST['nameMessage'])) ? filter_var($_REQUEST['nameMessage'], FILTER_SANITIZE_STRING) : null ;
	$dataMessage = (isset($_REQUEST['dataMessage'])) ? filter_var($_REQUEST['dataMessage'], FILTER_SANITIZE_EMAIL) : null ;

if ($nameMessage!=null && $dataMessage!=null) {


	$msg="<table><thead><th colspan='2'>Un nuevo mensaje ha sido enviado:</th></thead>
	<tbody>
	<tr><td><strong>Asunto: </strong></td><td>".$nameMessage."</td></tr>
	<tr><td><strong>Nombre Completo: </strong></td><td>".$dataMessage."</td></tr>
	</tbody>
	</table>
	";
	$title = "Prueba";
	$to = 'dialstudios@gmail.com';

	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	$headers .= 'To: '.$to.'' . "\r\n";
	$headers .= 'From: Enviado por <dialstudios@gmail.com>' . "\r\n";

	if(mail( $to, $title, $msg, $headers)){
		$response['message'] = "exito";
		$response['success'] = true;
	}
	else{
		$response['message'] = "error";
		$response['success'] = false;
	}
}
echo json_encode($response);
