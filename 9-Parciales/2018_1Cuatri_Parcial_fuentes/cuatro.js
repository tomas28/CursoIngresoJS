


//Pedir dos números y mostrar el resultado:
//Si son iguales los muestro concatenados. Si el primero es mayor, los resto, de lo contrario los sumo.
//Si la suma es mayor a 10, además de mostrar el resultado, muestro el mensaje "la suma es xxx y supero
//el 10"function mostrar()
function mostrar()
{

	var numero1;
	var numero2;
	var resta;
	var suma;
	var mensaje;

	numero1=prompt("ingrese el primer numero");
	numero1=parseInt(numero1);
	numero2=prompt("ingrese el segundo numero");
	numero2=parseInt(numero2);

	if (numero1==numero2) 
	{
		mensaje="los numeros son iguales ellos son:"+numero1+", "+numero2;
	}
	else
	{
		if (numero1>numero2) 
		{
			resta=numero1-numero2;
			mensaje="el resultado de la resta es: "+resta;
		}
		else
		{
			suma=numero1+numero2;
			mensaje="el resultado de la suma es: "+suma;
		}
		if (suma>10) 
		{
		mensaje="a suma es "+suma+" y supero el 10";
		}
	
	}	
	
	alert(mensaje);


	/*else  
	{
		if (numero1>numero2)
		{
			resta=numero1-numero2;
			mensaje="el resultado de la resta es: "+resta;
		}
		else
		{
			suma=numero1+numero2;
			mensaje="el resultado de la suma es: "+suma;
		}
		if (suma>10) 
		{
			mensaje="la suma es "+suma+" y supero el 10";
		}
	}
	
	alert(mensaje);

	/*var numero1;
	var numero2;
	var suma;
	var mensaje;
	var resta;

	numero1=prompt("ingrese el primer numero");
	numero1=parseInt(numero1);

	numero2=prompt("ingrese el segundo numero");
	numero2=parseInt(numero2);

	
	
	
	if (numero1==numero2) 
	{
		mensaje="los numeros son iguales y ellos son: "+numero1+" y "+numero2;
	}
	else
	{
		if (numero1>numero2) 
		{
			resta=numero1-numero2;
			mensaje="la resta es "+resta+" por eso se los resta";
		}
		else
		{
			suma=numero1+numero2;
			mensaje="la suma es "+suma+" por eso se los suma";
		}
		if (suma>10) 
		{
			mensaje="la suma es "+suma+" y supero el 10";
		}
	}
	
	alert(mensaje);













	/*var productos;
	var importe;
	var descuento;
	var importe;
	
	productos=prompt("ingrese la cantidad de productos que desea comprar");
	productos=parseInt(productos);
	
	importe=prompt("ingrese el importe de los productos ");
	importe=parseInt(importe);

	if (productos>=3) 
	{
		descuento=(importe*10)/100
		descuentoCantidad=descuento-importe
	}

alert("asdsa"+descuentoCantidad);



	/*var producto1;
	var producto2;
	var producto3;
	var sumaDeProductos;
	var descuento;
	var descuentoAdicional;
	var aumento;
	var pregunta;
	*/


	/*producto1=prompt("ingrese el importe del producto");
	producto1=parseInt(producto1);
	
	producto2=prompt("ingrese el importe del segundo producto");
	producto2=parseInt(producto2);

	producto3=prompt("ingrese el importe del tercer producto");
	producto3=parseInt(producto3);

	sumaDeProductos=producto1+producto2+producto3
	
	 
	if (producto1+producto2+producto3==sumaDeProductos)		
	{
		descuento= sumaDeProductos-((sumaDeProductos*10)/100);
	}
	if (sumaDeProductos>=2000)  
	{
		descuentoAdicional=descuento-(descuento*15)/100;
	}
	
	pregunta=prompt("¿pagará con tajeta o efectivo?")

	if (pregunta=="tarjeta") 
	{
		aumento=
	}
*/
}
