function mostrar()
//Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y
//100 (validar), la temperatura de almacenamiento (entre -30 y 30) hasta que el usuario quiera e informar
//al terminar el ingreso por document.write: a) La cantidad de temperaturas pares. b) La marca del
//producto más pesado. c) La cantidad de productos que se conservan a menos de 0 grados. d) El promedio
//del peso de todos los productos. f) El peso máximo y el mínimo.

{

	var marca;
	var peso;
	var temperatura;
	var respuesta=true;
	var contadorTemperaturasPares=0;
	var productosConservadosACeroGrados=0;
	var promedio;
	var contador=0;
	var acumuladorDePeso=0;
	var maximoPeso;
	var marcaMaximoPeso;
	var banderaPesoMaximo=false;
	var minimoPeso;
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
		if(banderaPesoMaximo==false || peso>maximoPeso)
		{
			marcaMaximoPeso=marca;
			maximoPeso=peso;
			banderaPesoMaximo=true;
		}
		if(banderaPesoMaximo==false || peso<minimoPeso)
		{
			minimoPeso=peso;
			banderaPesoMaximo=true;
		}
		if (temperatura<0) 
		{
			productosConservadosACeroGrados++;
		}


		respuesta=confirm("desea continuar?");
	}

	promedio=acumuladorDePeso/contador;
	document.write(" temperaturaspares "+contadorTemperaturasPares+" marca maxima "+marcaMaximoPeso+" cantidad de productos a -0 gradoas "+ productosConservadosACeroGrados+"el promedio es "+promedio+"el maximo peso es "+maximoPeso+"el minimo es "+minimoPeso);

}
