
function mostrar()
{
	var nombre1;
	var nombre2;
	var edad1;
	var edad2;
	var resultado;

	nombre1=prompt("ingrese su nombre ");
	nombre2=prompt("ingrese su nombre");

	edad1=prompt("ingrese la edad del primer nombre que ingreso anteriormente" );
	edad1=parseInt(edad1);

	edad2=prompt("ingrese la edad del segundo nombre que ingreso anteriormente");
	edad2=parseInt(edad2);
	
	resultado= edad1+edad2;


	alert("ustedes son: "+nombre1+" y "+nombre2+", sus edades son:  "+edad1+" y "+edad2+", y la suma de sus edades son: "+resultado);
	
}
