function mostrar()
{
	var sistemaSolar;
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
}
