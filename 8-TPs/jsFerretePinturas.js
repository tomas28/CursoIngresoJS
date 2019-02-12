/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempFa;
	var resutad;

	tempFa=Temperatura.value;
	tempFa=parseInt(tempFa);
	
	resutad=tempFa-32;
	alert("la temperatura en centigrados es: "+resutad);

}

function CentigradosFahrenheit () 
{
	var tempCe;
	var resutad;

	tempCe=Temperatura.value;
	tempCe=parseInt(tempCe);
	
	resutad=(tempCe*9/5)+32;
	alert("la temperatura en Fahrenheit es: "+resutad);
}
