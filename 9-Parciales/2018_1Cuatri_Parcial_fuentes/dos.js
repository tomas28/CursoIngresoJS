function mostrar()
{
	
	var nombre;
	var localidad;
	var perimetro;
	
	nombre=elNombre.value;
	nombre=parseInt(nombre);

	localidad=laLocalidad.value;

	alert("usted es: "+nombre+" y  vive en la localidad "+ localidad);


	/*var nombre;
	var localidad;

	nombre=elNombre.value;
	localidad=laLocalidad.value;

	alert("usted es "+nombre+" y vive en la localidad "+localidad);

	/*var precioEfectivo;
 	var aumento;
 	var resultado;

 	precioEfectivo=prompt("ingrese el precio del producto a pagar");
 	precioEfectivo=parseInt(precioEfectivo);

  	aumento=(precioEfectivo*10)/100;

  	resultado=precioEfectivo+aumento;

 	alert("el precio del producto en efectivo es: $"+precioEfectivo+", con tarjeta tiene un recargo del 10% que seria : $"+aumento+" de recargo, costandole final $"+resultado);

*/


}
