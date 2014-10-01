<?php

	if(strcasecmp('formulario-ajax', $_POST['metodo']) == 0){

		
		$html ='Nome:'.$_POST['cNome'];
		$html = "\n";
		$html = 'Email:'.$_POST['cMail'];
		$html = "\n\n Obrigado por Enviar a Mensagem.";


		echo  $html;	

			}
?>