function mostrar()
{
//tomo la edad  
var LaHora;

LaHora=hora.value;
LaHora=parseInt(LaHora);


	switch(LaHora) 
{
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  	alert("es de mañana");
  	break;
  case 20:
  case 21:
  case 22:
  case 23:
  case 24:
  	alert("es de noche");
  	break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  	alert("es de madrugada");
  	break;
    default:
    alert("es de tarde");

  	
  	
 } 	

}//FIN DE LA FUNCIÓN