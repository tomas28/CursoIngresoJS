function mostrar()
{
var precio;
var porcentaje;
var precioFinal;
precio=prompt("ingrese el precio que corresponde ");
precio=parseInt(precio);
porcentaje=prompt("ingrese el porcentaje de descuento que corresponda ");
porcentaje=parseInt(porcentaje);
precioFinal=((precio*porcentaje)/100)+precio;
precioFinal=elPrecioFinal.value;
}
