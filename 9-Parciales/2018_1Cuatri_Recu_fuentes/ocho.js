function mostrar()
{
	var numero;
	var letra;
	var respuesta="si";
	var contador=0;
	var numerosImpares;
	var numerosPositivos;
	while(respuesta!="no")
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		while(isNaN(numero) == true || numero< -100 || numero>100)
		{
			numero=prompt("error, ingrese un NUMERO entre el -100 y el 100");
			numero=parseInt(numero);
		}	
		
		letra=prompt("ingrese una letra");
		while(isNaN(letra) == false)
		{
			letra=prompt("error, ingrese una letra");
		}
		respuesta=prompt("si desea terminar de ingresar los datos escriba no");
		contador=contador+1;
	
	if (numero>0) 
	{
		numerosPositivos
	}




	}
}
