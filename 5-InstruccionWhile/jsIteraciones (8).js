function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var negativo;
	var positivo;

	contador = 0;
	acumulador = 0;
	respuesta = 'si';
	negativo = 1;
	positivo = 0;


	while (respuesta == "si") 

	{
		contador = contador + 1;
		numero = prompt("Por Favor, Ingrese El Numero " + contador);
		numero = parseInt(numero);
		respuesta = prompt("Desea Ingresar Mas Datos??? Ingrese SI En Minuscula Para Continuar: ");

		
		if (numero > 0) 
		{
			positivo = positivo + numero;
		} 

		else
		{
			negativo = negativo * numero;
		}
	}	



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN