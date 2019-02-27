function mostrar()
{
	var numero;
	var letra;
	var respuesta=true;
	var contador=0;
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var contadorPositivos=0;
	var promedioPositivo=0;
	var sumaPositivos=0;
	var contadorNegativos=0;
	var	sumaNegativos=0;
	var numeroYLetra;
	var maximo=-100;
	var minimo=100;
	var letraMaxima;
	var letraMinima;

	while(respuesta==true)
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
		
		respuesta=confirm("¿desea seguir ingresando valores?");
		
		contador=contador+1;
	
		if (numero%2==0) 
		{
			contadorPares++;
		}
		else
		{
			contadorImpares++;
		}

		if (numero==0) 
		{
			contadorCeros++;
		}

		if (numero>0) 
		{
			contadorPositivos++;
			sumaPositivos=numero+sumaPositivos;
			
		}
		else
		{
			contadorNegativos++;
			sumaNegativos=numero+sumaNegativos;
			
		}

		if (maximo<numero) 
		{
			maximo=numero;
			letraMaxima=letra
		}
		if (minimo>numero)
		{
			minimo=numero;
			letraMinima=letra
		}
	}

	promedioPositivo=sumaPositivos/contadorPositivos;

	document.write(" La cantidad de números pares son: "+contadorPares+" La cantidad de números impares son: "+contadorImpares+" La cantidad de ceros son: "+contadorCeros+" El promedio de todos los números positivos ingresados son: "+promedioPositivo+" La suma de todos los números negativos son: "+sumaNegativos+" El número  máximo "+maximo+" y su letra "+letraMaxima+" el numero minimo "+minimo+" y su letra "+letraMinima);

}
