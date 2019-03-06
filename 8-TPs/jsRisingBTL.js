/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var laEdad;
 	var elSexo;
 	var elEstadoCivil;
 	var elSueldoBruto;
 	var elNumeroDeLegajo;
 	var laNacionalidad;
 	var contador=0;


 	while(contador<1)
 	{
 		laEdad=prompt("ingrese su laEdad");
 		laEdad=parseInt(laEdad);
 		
 		while(isNaN(laEdad)==true || laEdad<18 || laEdad>91)
 		{
 			laEdad=prompt("error, ingrese su laEdad");
 			laEdad=parseInt(laEdad);
 			
 		}
 		elSexo=prompt("ingrese F o M");
 		

 		while(isNaN(elSexo)==false || elSexo!="M" && elSexo!="F")
 		{
 			elSexo=prompt("error, F o M");
 				
 		}
 		elEstadoCivil=prompt("ingrese 1, 2, 3, o 4");
 		elEstadoCivil=parseInt(elEstadoCivil);
 		
 		while(isNaN(elEstadoCivil)==true || elEstadoCivil!=1 && elEstadoCivil!=2 && elEstadoCivil!=3 && elEstadoCivil!=4)
 		{
 			elEstadoCivil=prompt("error, ingrese 1, 2, 3 o 4");
 			elEstadoCivil=parseInt(elEstadoCivil);
 			
 		}
 		elSueldoBruto=prompt("ingrese el sueldo mayor a 8000");
 		

 		while(isNaN(elSueldoBruto)==true || elSueldoBruto<8000 )
 		{
 			elSueldoBruto=prompt("error, ingrese el sueldo");
 				
 		}
 		elNumeroDeLegajo=prompt("ingrese su Numero De Legajo");
 		elNumeroDeLegajo=parseInt(elNumeroDeLegajo);
 		
 		while(isNaN(elNumeroDeLegajo)==true || elNumeroDeLegajo<1000 || elNumeroDeLegajo>10000)
 		{
 			elNumeroDeLegajo=prompt("error, ingrese su Numero De Legajo");
 			elNumeroDeLegajo=parseInt(elNumeroDeLegajo);
 			
 		}
 		laNacionalidad=prompt("ingrese A, E o N");
 		

 		while(isNaN(laNacionalidad)==false || laNacionalidad!="A" && laNacionalidad!="E" && laNacionalidad!="N")
 		{
 			laNacionalidad=prompt("ingrese A, E o N");
 				
 		}
 		contador=contador+1;

 	}
 	Edad.value=laEdad;
 	Sexo.value=elSexo;
 	EstadoCivil.value=elEstadoCivil;
	Sueldo.value=elSueldoBruto;
	Legajo.value=elNumeroDeLegajo;
	Nacionalidad.value=laNacionalidad;

}
