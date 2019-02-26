function mostrar()
{

	
	var contador;
	var acumulador;
	var respuesta;
	var maximo;
	var minimo;

	contador = 0;
	acumulador = 0;
	respuesta = 'si';
	maximo= 0;
	minimo= 0;
	bandera=true;

	while (respuesta == "si") 

	{
		
		numero = prompt("Por Favor, Ingrese El Numero " + contador);
		numero = parseInt(numero);
		
		if (bandera) 
		{
			maximo=numero;
			minimo=numero;
			bandera=false;
		} 

		else
		{
			if (numero>maximo) 
			{
				maximo=numero;
			}
			if (numero<minimo) 
			{
				minimo=numero;
			}
		}
		
		respuesta = prompt("Desea Ingresar Mas Datos??? Ingrese SI En Minuscula Para Continuar: ");
	}	
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
}//FIN DE LA FUNCIÓN