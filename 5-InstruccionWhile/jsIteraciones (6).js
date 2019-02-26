function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero1;

	while (contador<5) 
	{
		contador++;
		numero1=prompt("ingrese 1 numero");
		numero1=parseInt(numero1);
		acumulador+=numero1;	
		
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
//suma
//promedio