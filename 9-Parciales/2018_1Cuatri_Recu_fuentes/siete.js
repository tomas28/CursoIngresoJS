function mostrar()
{
	var contador=0;
	var acumulador=1;
	var promedio;
	var notaMaxima;
	var notaMinima;
	var nota;
	var sexo;
	var numero;
	var sexoNotaMasBaja;
	var varonesMayorNota;
	var cantidadDeVaronesMayorASeis=0;

	while(contador<5)
	{
		nota=prompt("ingrese una nota");
		nota=parseInt(nota);
		while (isNaN(nota) == true || nota<0 || nota>10)
		{
			nota=prompt("error, ingrese nota");
			nota=parseInt(nota);
		}	
		
		sexo=prompt("ingrese el sexo");
		while(isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo=prompt("error, ingrese el sexo");
		}
		
		acumulador=acumulador+nota;
		if (contador==0) 
		{
			notaMinima=nota;
			sexoNotaMasBaja=sexo;
		}
		else
		{
			if (notaMinima>nota) 
			{
				notaMinima=nota;
				sexoNotaMasBaja=sexo;
			}
		}
		if (nota>5 && sexo== "m") 
		{
			cantidadDeVaronesMayorASeis=cantidadDeVaronesMayorASeis+1
		}

		contador=contador+1;
		acumulador=acumulador+nota;
	}	

	promedio=acumulador/contador;

	alert("el promedio de las notas totales es; "+promedio+" la nota mas baja es:"+notaMinima+" el sexo de la nota mas baja es: "+sexoNotaMasBaja+" la cantidad de varones que superaron o sacaron 6 son:"+cantidadDeVaronesMayorASeis);


}
