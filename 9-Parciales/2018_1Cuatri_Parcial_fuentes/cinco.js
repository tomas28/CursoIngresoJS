function mostrar()
{
	var sistemaSolar;

	sistemaSolar=prompt("ingrese el nombre de un planeta de nuestro sistema solar en minuscula");



	switch(sistemaSolar)
	{
		case"tierra":
			alert("aca vivimos");
			break;
		case "mercurio":
		case "venus":	
			alert("acá hace más calor");
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			alert("acá hace más frio");
			break;
		default:
			alert("error, ingrese el nombre de un planeta de nuestro sistema solar en minuscula");

	}	




Mercurio
Venus
Tierra
Marte
Júpiter
Saturno
Urano
Neptuno









	/*var sistemaSolar;
	var mensaje;

	sistemaSolar=prompt("ingrese el nombre de un polaneta de nuestro sistema solar EN MINUSCULAS");

switch(sistemaSolar)
{
	case "mercurio":
	case "venus":
		mensaje="aca hace mas calor";
		break;
	case "la tierra":
		mensaje="aca vivimos";
		break;	
	case "marte":
	case "jupiter":
	case "saturno":
	case "urano":
	case "neptuno": 
	case "pluton":
		mensaje="aca hace mas frio";
		break;
	default:
		mensaje="el planeta es invalido y los planetas se ingresan en minúscula (mercurio, venus, etc.)";		
}
	alert(mensaje);


*/
}
