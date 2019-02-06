/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
var descuento
var sueldo 

sueldo= importe.value;
sueldo=parseInt(sueldo); 
descuento = (sueldo -(sueldo *10)/100);

resultado.value = descuento
}
