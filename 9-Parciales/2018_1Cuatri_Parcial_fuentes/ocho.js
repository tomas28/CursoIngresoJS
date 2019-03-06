function mostrar()
{
	
	var letra;
	var nuemro;
	var contador=0;
	var contadorNumerosPares=0;
	var contadorNumerosImpares=0;
	var contadorDeCeros=0;
	var contadorNumerosPositivos=0;
	var contadorNumerosnegativos=0;
	var sumaNumerosPositivos=0;
	var sumaNumerosNegativos=0;
	var promedioPositivos;
	var numeroMaximo=-100;
	var numeroMinimo=100;
	var letraMaxima;
	var letraMinima;
	var respuesta = true;

	while(respuesta == true)
	{
		letra=prompt("ingrese una letra");
		while(isNaN(letra) == false)
		{
			letra=prompt("error, ingrese una letra");
		}

		numero=prompt("ingrese un numero entre -100 y 100");
		numero=parseInt(numero);
		while(isNaN(numero)==true || numero<-100 || numero>100)
		{
			numero=prompt("error, ingrese un numero entre -100 y 100");
			numero=parseInt(numero);
		}	
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
		if (numero>0) 
		{
			contadorNumerosPositivos++;
			sumaNumerosPositivos=numero+sumaNumerosPositivos;
		}
		else
		{
			contadorNumerosnegativos++;
			sumaNumerosNegativos=numero+sumaNumerosNegativos;
		}
		if (numeroMaximo<numero) 
		{
			numeroMaximo=numero;
			letraMaxima=letra;
		}
		if (numeroMinimo>numero) 
		{
			numeroMinimo=numero;
			letraMinima=letra;
		}
		
		contador=contador+1 
		respuesta=confirm("desea continuar?");
	}


	promedioPositivos=sumaNumerosPositivos/contadorNumerosPositivos;

	document.write("La cantidad de números pares: "+contadorNumerosPares+" La cantidad de números impares: "+contadorNumerosImpares+" La cantidad de ceros: "+contadorDeCeros+"  El promedio de todos los números positivos ingresados: "+promedioPositivos+" La suma de todos los números negativos: "+sumaNumerosNegativos+" numeroMaximo: "+numeroMaximo+" letraMaxima: "+letraMaxima+" numeroMinimo: "+numeroMinimo+" letraMinima: "+letraMinima );















































	/*var numero;
	var letra;
	var contador=0;
	var acumulador=1;
	var promedioNumerosPositivos;
	var numeroMinimo=100;
	var numeroMaximo=-100;
	var letraMaxima;
	var letraMinima;
	var letraNumeroMasBajo;	
	var respuesta= true;
	var contadorNumerosPares=0;
	var contadorNumerosImpares=0;
	var contadorDeCeros=0;
	var sumaNumerosPositivos=0;
	var sumaNumerosNegativos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;

	while(respuesta == true)
	{

		letra=prompt("ingrese una letra");
		while(isNaN(letra) == false )
		{
			letra=prompt("error, ingrese una letra");
		}
		
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		while(isNaN(numero) == true || numero<-100 || numero>100)
		{
			numero=prompt("error, ingrese un numero entre -100 y 100");
			numero=parseInt(numero);
		}
		
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
		if (numeroMaximo<numero) 
		{
			numeroMaximo=numero;
			letraMaxima=letra;
		}
		if (numeroMinimo>numero) 
		{
			numeroMinimo=numero;
			letraMinima=letra;
		}
		

		contador=contador+1;
		respuesta=confirm("si desea dejar de introducir datos aprete en aceptar");
	}
	
	promedioNumerosPositivos=sumaNumerosPositivos/contadorPositivos;

	document.write("La cantidad de números pares: "+contadorNumerosPares+"La cantidad de números impares: "+contadorNumerosImpares+" La cantidad de ceros: "+contadorDeCeros+" El promedio de todos los números positivos ingresados: "+promedioNumerosPositivos+"La suma de todos los números negativos: "+sumaNumerosNegativos+"El número maximo "+numeroMaximo+" la letra del máximo "+letraMaxima+" el numero mínimo "+numeroMinimo+" letra Minima "+letraMinima);
























	/*var letra;
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
*/
}
