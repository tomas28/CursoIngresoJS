function mostrar()
//Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y
//100 (validar), la temperatura de almacenamiento (entre -30 y 30) hasta que el usuario quiera e informar
//al terminar el ingreso por document.write: a) La cantidad de temperaturas pares. b) La marca del
//producto más pesado. c) La cantidad de productos que se conservan a menos de 0 grados. d) El promedio
//del peso de todos los productos. f) El peso máximo y el mínimo.

{

	var acumulador=0;
	var temperatura;
	var marca;
	var peso;
	var contador=0;
	var contadorTemperaturasPares=0;
	var contadorNumerosImpares=0;
	var cantidadDeProductosQueSeConservanAMenosDeCero=0;
	var promedioProductos;
	var pesoMaximo=1;
	var pesoMinimo=100;
	var marcaPesoMaximo;
	var letraMinima;
	var respuesta = true;

	while(respuesta == true)
	{
		marca=prompt("ingrese una marca");
		peso=prompt("ingrese un peso entre 1 y 100");
		peso=parseFloat(peso);
		while(isNaN(peso) == true || peso<1 || peso>100)
		{
			peso=prompt("error, ingrese una peso");
			peso=parseFloat(peso);
		}

		temperatura=prompt("ingrese un temperatura entre -30 y 30");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)==true || temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("error, ingrese un temperatura entre -30 y 30");
			temperatura=parseInt(temperatura);
		}	
		if (temperatura%2==0) 
		{
			contadorTemperaturasPares++;
		}
		
		if (temperatura<0) 
		{
			cantidadDeProductosQueSeConservanAMenosDeCero++;
		}
		
		if (pesoMaximo<peso) 
		{
			pesoMaximo=peso;
			marcaPesoMaximo=marca;
		}
		if (pesoMinimo>peso) 
		{
			pesoMinimo=peso;
		}
		
		acumulador=peso+acumulador;
		contador=contador+1 
		respuesta=confirm("desea continuar?");
	}


	promedioProductos=acumulador/contador;
	document.write("La cantidad de temperaturas pares. "+contadorTemperaturasPares+" La marca del producto más pesado: "+marcaPesoMaximo+"  La cantidad de productos que se conservan a menos de 0 grados: "+cantidadDeProductosQueSeConservanAMenosDeCero+" El promedio del peso de todos los productos "+promedioProductos+" peso maximo "+pesoMaximo+" peso minimo "+pesoMinimo);
}






































	/*var peso;
	var temperatura;
	var contador=0;
	var acumulador=1;
	var promedioProductos;
	var pesoMaximo=1;
	var pesoMinimo=100;
	var marcaPesoMaximo;
	var letraMinima;
	var letraNumeroMasBajo;	
	var respuesta = true;
	var contadorTemperaturasPares=0;
	var contadorTemperaturasImpares=0;
	var contadorDeCeros=0;
	var sumaNumerosPositivos=0;
	var sumaNumerosNegativos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var cantidadDeProductosQueSeConservanAMenosDeCero=0;

	while(respuesta == true)
	{

		marca=prompt("ingrese la marca");
		peso=prompt("ingrese un peso");
		peso=parseFloat(peso);
		while(isNaN(peso) == true || peso< 1 || peso>100)
		{
			peso=prompt("error, ingrese un peso entre -100 y 100");
			peso=parseFloat(peso);
		}
			temperatura=prompt("ingrese una temperatura entre -30 y 30");
			temperatura=parseInt(temperatura);
		while(isNaN(temperatura) == true || temperatura<-31 || temperatura>30 )
		{
			temperatura=prompt("error, ingrese una temperatura entre -30 y 30");
			temperatura=parseInt(temperatura);
		}
		
		if (temperatura%2==0) 
		{
			contadorTemperaturasPares++;
		}
		else
		{
			contadorTemperaturasImpares++;
		}
		
		if (pesoMaximo<peso) 
		{
			pesoMaximo=peso;
			marcaPesoMaximo=marca;
		}
		if (pesoMinimo>peso) 
		{
			pesoMinimo=peso;
			
		}
		if (temperatura<0) 
		{
			cantidadDeProductosQueSeConservanAMenosDeCero++;
		}
		
		
		

		acumulador=peso+acumulador;
		contador=contador+1;
		respuesta=confirm("si desea dejar de introducir datos aprete en aceptar");

	}
	
	promedioProductos=acumulador/contador;


	document.write("La cantidad de temperaturas pares: "+contadorTemperaturasPares+" La marca del producto más pesado: "+marcaPesoMaximo+ " La cantidad de productos que se conservan a menos de 0 grados: "+cantidadDeProductosQueSeConservanAMenosDeCero+" El promedio del peso de todos los productos: "+promedioProductos+" El peso máximo "+pesoMaximo+" el peso minimo "+pesoMinimo);

























	/*var marca;
	var peso;
	var temperatura;
	var respuesta=true;
	var contadorTemperaturasPares=0;
	var productosConservadosACeroGrados=0;
	var promedio;
	var contador=0;
	var acumuladorDePeso=0;
	var maximoPeso=1;
	var marcaMaximoPeso;
	var banderaPesoMaximo=false;
	var minimoPeso=100;
	while(respuesta==true)
	{
		
		marca=prompt("ingrese marca");
		peso=prompt("ingrese el peso");
		peso=parseFloat(peso); 
		while(isNaN(peso)==true || peso<1 || peso>100 )
		{
			peso=prompt("ingrese un peso entre 1 y 100 ");
		}
		temperatura=prompt("ingrese temperatura");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)==true || temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("ingrese una temperatura entre -30 y 30");
		}
		acumuladorDePeso=acumuladorDePeso+peso;
		contador++;

		if (temperatura%2==0) 
		{
			contadorTemperaturasPares++;
		}
		if( peso>maximoPeso)
		{
			marcaMaximoPeso=marca;
			maximoPeso=peso;
			
		}
		if(peso<minimoPeso)
		{
			minimoPeso=peso;
			
		}
		if (temperatura<0) 
		{
			productosConservadosACeroGrados++;
		}


		respuesta=confirm("desea continuar?");
	}

}	promedio=acumuladorDePeso/contador;
	document.write(" temperaturaspares "+contadorTemperaturasPares+" marca maxima "+marcaMaximoPeso+" cantidad de productos a -0 gradoas "+ productosConservadosACeroGrados+"el promedio es "+promedio+"el maximo peso es "+maximoPeso+"el minimo es "+minimoPeso);
*/

