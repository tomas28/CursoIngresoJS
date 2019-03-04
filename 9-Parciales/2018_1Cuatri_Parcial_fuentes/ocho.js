function mostrar()
{
	var letra;
	var numero;
	var maximo=-100;
	var minimo=100;
	var respuesta=true;
	var contadorNumerosPares=0;
	var contadorNumerosImpares=0;
	var contadorDeCeros=0;
	var promedioNumerosPositivos=0;
	var sumaNumerosNegativos=0;
	var sumaNumerosPositivos=0;
	var letraMaxima;
	var letraMinima;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contador=0;
	while(respuesta == true)
	{
		letra=prompt("ingrese una letra");
		while(isNaN(letra) == false )
		{
			letra=prompt("error, ingrese una letra");
		}

		numero=prompt("ingrese un numero entre -100 y 100");
		numero=parseInt(numero);
		while(isNaN(numero) == true || numero<-100 || numero>100)
		{
			numero=prompt("error, ingrese un numero entre -100 y 100");
			numero=parseInt(numero);
		}
		
		contador=contador++
		
		if (numero%2==0) 
		{
			contadorNumerosPares++;
		}
		else
		{
			contadorNumerosImpares++;
		}
		if (numero==0) 
		{
			contadorDeCeros++;
		}
		if (maximo<numero) 
		{
			maximo=numero;
			letraMaxima=letra;
		}
		if (minimo>numero) 
		{
			minimo=numero;
			letraMinima=letra;
		}
		if (numero>0) 
		{
			contadorPositivos++;
			sumaNumerosPositivos=numero+sumaNumerosPositivos;
		}
		else
		{
			contadorNegativos++;
			sumaNumerosNegativos=numero+sumaNumerosNegativos;
		}
		respuesta=confirm("si desea continuar aprete aceptar, de lo contrario aprete cancelar");
	}	

	promedioNumerosPositivos=sumaNumerosPositivos/contadorPositivos;
	document.write("la cantidad de numeros pares son: "+contadorNumerosPares+" la cantidad de numeros impares es: "+contadorNumerosImpares+" la cantidad de ceros es: "+contadorDeCeros+" el promedio de los numeros positivos ingresados es: "+promedioNumerosPositivos+" la suma de los numeros negativos ingresados es: "+sumaNumerosNegativos+" el numero maximo es: "+maximo+" su letra es: "+letraMaxima+" el numero minimo es: "+minimo+" y su letra es: "+letraMinima);
}
