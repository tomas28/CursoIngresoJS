function mostrar()
{

//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
//a) El promedio de las notas totales. 
//b) La nota más baja y el sexo de esa persona. 
//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
	
	
	var notas;
	var sexo;
	var contador=0;
	var acumulador=1;
	var promedioNotas;
	var notaMinima=10;
	var notaMaxima=0;
	var sexoNotaMasBaja;	
	var CantidadDeVaronesQueSuperaronElSeis=0;

	while(contador<5)
	{
		notas=prompt("ingrese las notas");
		notas=parseInt(notas);
		while(isNaN(notas) == true || notas<0 || notas>10)
		{
			notas=prompt("error, ingrese una nota entre 0 y 10");
			notas=parseInt(notas);
		}
		sexo=prompt("ingrese f o m");
		while(isNaN(sexo) == false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("error, ingrese f o m");
		}
		
		if (notas<notaMinima) 
		{
			notaMinima=notas;
			sexoNotaMasBaja=sexo;
		}
		if (notas>6 && sexo=="m") 
		{
			CantidadDeVaronesQueSuperaronElSeis++;
		}


		contador=contador+1;
		acumulador=notas+acumulador;

	}
	





	promedioNotas=acumulador/contador;
	alert(" el promedio de las notas es: "+promedioNotas+"la nota minima es: "+notaMinima+"el sexo de la nota mas minima es: "+ sexoNotaMasBaja+"la cantidad de varores que superaron el 6 es: "+CantidadDeVaronesQueSuperaronElSeis);




	/*var nota;
	var sexo;
	var promedioNotas;
	var notaMasBaja;
	var sexoNotaBaja;
	var VaronesQueSuperaronElSeis=0;
	var notaMaxima=0;
	var notaMinima=10;
	var respuesta=true;
	var contador=0;
	var acumulador=1;

		while(contador<5)
			{
				nota=prompt("ingrese una nota");
				nota=parseInt(nota);
				while(isNaN(nota) == true || nota<0 || nota>10 )
				{
					nota=prompt("error, ingrese una nota entre el 0 y el 10");
					nota=parseInt(nota);
				}

				sexo=prompt("ingrese un sexo f o m");
				while(isNaN(sexo) == false || sexo!= "f" && sexo!= "m")
				{
					sexo=prompt("error, ingrese un sexo f o m");
					
				}		
			
				if (notaMinima>nota) 
				{
					notaMinima=nota;
					sexoNotaBaja=sexo;

				}
				if (nota>5 && sexo== "m") 
				{
					VaronesQueSuperaronElSeis++;
				}
				acumulador=nota+acumulador;
				contador=contador+1;

			}
			promedioNotas=acumulador/contador;	
			alert("el promedio de las notas es: "+promedioNotas+" la nota mas baja es: "+notaMinima+" el sexo de la nota mas baja es: "+sexoNotaBaja+" la cantidad de varones que sacaron 6 o mas es: "+VaronesQueSuperaronElSeis);
*/
}
