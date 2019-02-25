function mostrar()
//un sistema que ingrese 4 importes, mostrar el mayor de la compra, decir cuanto es el tota. 
//si supera 100 pesos hacer 10% de desc,si supera los 50 peses el des es del 5%,
//en el case de ser -de 50 le sumo un 20%

{
	var importe1;	
	var importe2;
	var importe3;
	var importe4;
	var mayorImporte;
	var sumaDeImportes;
	var descuento;
	var precioFinal;
	var aumento;

	importe1=prompt("por favor ingrese el primer importe");
	importe1=parseInt(importe1);
	
	importe2=prompt("por favor ingrese el segundo importe");
	importe2=parseInt(importe2);
	
	importe3=prompt("por favor ingrese el tercer importe");
	importe3=parseInt(importe3);
	
	importe4=prompt("por favor ingrese el cuarto importe");
	importe4=parseInt(importe4);

	//sumaDeImportes=importe1+importe2+importe3+importe4
	if (importe1>importe2 && importe1>importe3 && importe1>importe4) 
	{
		mayorImporte=importe1;
	}
	else
	{
		if (importe2>importe1 && importe2>importe3 && importe2>importe4) 
		{
			mayorImporte=importe2;
		}
		else
		{
			if (importe3>importe1 && importe3>importe2 && importe3>importe4) 
			{
				mayorImporte=importe3;
			}
			else
			{
				mayorImporte=importe4;
			}//if (importe3>importe1 && importe3> importe2 && importe3>importe4) 	
		}//if (importe2>importe1 && importe2>importe3 && importe2>importe4) 	
	}//if (importe1>importe2 && importe1>importe3 && importe1>importe4) 	

	sumaDeImportes=importe1+importe2+importe3+importe4;
	
	if (sumaDeImportes>99) 
	{
		descuento=10;
	}
	else
	{
		if (sumaDeImportes>49)
		 {
		 	descuento=5;
		 }
		 else
		 {
		 	aumento=sumaDeImportes*15/100
		 	sumaDeImportes=sumaDeImportes*aumento
		 	descuento=0;
		 }//if (sumaDeImportes>49)
	}//if (sumaDeImportes>99) 

	precioFinal=sumaDeImportes*descuento/100;
	precioFinal=sumaDeImportes-descuento;

	alert("el importe de mayor valor es: " +mayorImporte+" y el precio final es: $"+precioFinal);




}
	