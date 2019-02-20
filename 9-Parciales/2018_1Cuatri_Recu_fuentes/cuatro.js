function mostrar()
//un sistema que ingrese 4 importes, mostrar el mayor de la compra, decir cuanto es el tota. 
//si supera 100 pesos hacer 10% de desc,si supera los 50 peses el des es del 5%,
//en el case de ser -de 50 le sumo un 20%

{
	var importe1;	
	var importe2;
	var importe3;
	var importe4;
	var sumaDeImportes;
	var descuento;
	var descuentoFinal;
	var precioFinal;
	var mensaje;
	var aumento;
	var aumentoFinal;

	importe1=prompt("porfavor ingrese el importe del producto");
	importe1=parseInt(importe1);
	
	importe2=prompt("porfavor ingrese el importe del producto");
	importe2=parseInt(importe2);
	
	importe3=prompt("porfavor ingrese el importe del producto");
	importe3=parseInt(importe3);
	
	importe4=prompt("porfavor ingrese el importe del producto");
	importe4=parseInt(importe4);

	sumaDeImportes=importe1+importe2+importe3+importe4
	
	
	//console.log(sumaDeImportes);
	

	if (sumaDeImportes>100) 
	{
		descuento=(sumaDeImportes*10)/100;
		precioFinal=sumaDeImportes-descuento;
		mensaje =precioFinal;
	}	
	else
	{
		if (sumaDeImportes>50)
		 {
		 	descuento=(sumaDeImportes*5)/100;
			precioFinal=sumaDeImportes-descuento;
			mensaje =precioFinal;
		 }
		 else
		 {
		 	aumento=(sumaDeImportes*15)/100;
			precioFinal=sumaDeImportes+aumento;
			mensaje=precioFinal;

		 }
	}
	mensaje="el precio final es: "+precioFinal;

		/*if (sumaDeImportes>50 && sumaDeImportes<100) 
	
		
		(sumaDeImportes*5)/100=descuento;
		descuentoFinal=sumaDeImportes-descuento;
		mensaje =descuentoFinal;
		
	}
	else
	{
		if (sumaDeImportes<50) 
		{
			aumento=(sumaDeImportes*20)/100;
			aumentoFinal=sumaDeImportes+aumento;
			mensaje=aumentoFinal;
		}
	}

			alert(mensaje);
	/*		
	if (sumaDeImportes>=100) 
	{
		descuento=sumaDeImportes/10;
		mensaje=descuentoFinal;
	}
	
*/

}
