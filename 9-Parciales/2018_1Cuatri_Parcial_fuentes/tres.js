function mostrar()
{

	var precio;
	var porcentajeDeDescuento;
	var precioFinal;

	precio=prompt("ingrese el precio");
	precio=parseInt(precio);

	porcentajeDeDescuento=prompt("ingrese el porcentajeDeDescuento");

	precioFinal=precio-(precio*porcentajeDeDescuento/100);

	elPrecioFinal.value=precioFinal;





/*var precio;
var porcentajeDescuento;
var precioFinal;

precio=prompt("ingrese el precio que desee");
precio=parseFloat(precio);

porcentajeDescuento=prompt("ingrese el porcentaje de descuento");
porcentajeDescuento=parseFloat(porcentajeDescuento);

precioFinal=precio-(precio*porcentajeDescuento/100);

elPrecioFinal.value=precioFinal;


/*var precio;
var porcentaje;
var resultado;

precio=prompt("ingrese el precio que corresponde ");
precio=parseInt(precio);

porcentaje=prompt("ingrese el porcentaje de descuento que corresponda ");
porcentaje=parseInt(porcentaje);

resultado=precio-((precio*porcentaje)/100);

elPrecioFinal.value=resultado;
*/
}
