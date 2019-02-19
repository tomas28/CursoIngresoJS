function mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño=mes.value;

switch(mesDelAño) 
{
  case "Julio":
  case"Agosto":
  	alert("abrigate que hacer frio");
    break;
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
  case "Diciembre":
 	alert("pasamos el frio ahora el calor");
  	default:
  	alert("Falta para el invierno.")
 } 	

}//FIN DE LA FUNCIÓN