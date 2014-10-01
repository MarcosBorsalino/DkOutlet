<!--formulario.js-->

 /* $('#fContato').submit(function (e){

 	e.preventDefault();

 	if($('#enviar').val() =='Eviando...'){
 		return (false);

 	}

 	$('#enviar').val('Enviando...');
*/

 	$.ajax({
 		url: 'valida-formulario.php',
 		type: 'post',
 		dataType: 'html',
 		data: {

 			//'metodo':$('#metodo').val(),
 			'nome':$('#cNome').val(), 
 			'email'$('#cMail').val()
 		 		}
 	
 	}).done(function(data){
 		alert(data);

 			$('#enviar').val('Enviar Dados');
 			//* $('#metodo').val('');
 			$('#cNome').val('');
 			$('#cMail').val('');
 		 

 	});

 });
