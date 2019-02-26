function mostrar()
{

	var elnNmero = prompt("ingrese un número entre 0 y 10.");

	elnNmero=parseInt(elnNmero);
	
	while (elnNmero<0 || elnNmero>9) 
	{
		elnNmero = prompt("ingrese un número entre 0 y 10.");
	}
	
	Numero.value=elnNmero;

}//FIN DE LA FUNCIÓN