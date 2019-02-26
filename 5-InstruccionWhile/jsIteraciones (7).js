function mostrar()
{

	var contador;
 	var acumulador;
  	var respuesta;

  	contador = 0;
	acumulador = 1;
	respuesta = 'si';


	while (respuesta == "si")

	{

	contador = contador + 1;
	numero = prompt("Por Favor, Ingrese El Numero " + contador);
	numero = parseInt(numero);
	acumulador = acumulador + numero;
	respuesta = prompt("Desea Ingresar Mas Datos??? Ingrese SI En Minuscula Para Continuar: ");

	}	


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN