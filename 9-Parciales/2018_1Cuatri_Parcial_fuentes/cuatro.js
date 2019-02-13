function mostrar()
{
	var productos;
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

}
