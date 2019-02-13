function mostrar()
{
	var precioEfectivo;
 	var aumento;
 	var resultado;

 	precioEfectivo=prompt("ingrese el precio del producto a pagar");
 	precioEfectivo=parseInt(precioEfectivo);

  	aumento=(precioEfectivo*10)/100;

  	resultado=precioEfectivo+aumento;

 	alert("el precio del producto en efectivo es: $"+precioEfectivo+", con tarjeta tiene un recargo del 10% que seria : $"+aumento+" de recargo, costandole final $"+resultado);




}
