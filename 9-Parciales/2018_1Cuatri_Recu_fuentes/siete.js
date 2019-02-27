function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var maximo;
	var minimo;
	var nota;
	var sexo;

	contador = 0;
	acumulador = 0;
	maximo= 0;
	minimo= 0;
	bandera=true;

	while (contador<10) 

	{
		contador=contador +1;
		nota = prompt("Por Favor, Ingrese la nota " + contador);
		nota = parseInt(nota);
			
		if (isNaN(nota)=true || nota<0 || nota >10) 
			{
				nota = prompt("Por Favor, Ingrese un NUMERO entre 0 y 10 ");
			}	
		while (sexo=="f" || sexo=="m") 
		{
		contador=contador +1;
		sexo = prompt("ingrese f ó m, para el sexo " );

		if (isNaN(sexo)=false) 
			{
			sexo=prompt("ingrese f ó m" );
			}
	
		}
	}
	
	
}
