function mostrar()
{
//tomo la edad  
var laEdad;
var estadoCi;

laEdad=edad.value;
laEdad=parseInt(laEdad);

estadoCi=estadoCivil.value;

if (laEdad<18) 
	if(estadoCi!="Soltero")
{
	alert("es muy chico para no ser soltero");
} 
	
	


}//FIN DE LA FUNCIÓN