function mostrar()
{

	var contador;
 	var acumulador;
  	var respuesta;

  	contador = 0;
	acumulador = 1;
	respuesta = 'si';


	while (respuesta !="no")

	{

	contador = contador + 1;
	numero = prompt("Por Favor, Ingrese El Numero " + contador);
	numero = parseInt(numero);
	acumulador = acumulador + numero;
	respuesta = prompt("cuando desee dejar de ingresar numeros ingrese no, de lo contrario no ingrese nada");

	}	


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN