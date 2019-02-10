function mostrar()
{
var precio;
var porcentaje;
var resultado;

precio=prompt("ingrese el precio que corresponde ");
precio=parseInt(precio);

porcentaje=prompt("ingrese el porcentaje de descuento que corresponda ");
porcentaje=parseInt(porcentaje);

resultado=precio-((precio*porcentaje)/100);

elPrecioFinal.value=resultado;
}
