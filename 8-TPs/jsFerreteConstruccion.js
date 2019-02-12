/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var anchoRec;
var largoRec;
var resultado;

anchoRec=Ancho.value;
anchoRec=parseInt(anchoRec);

largoRec=Largo.value;
largoRec=parseInt(largoRec);

resultado=((largoRec+anchoRec)*2)*3
alert("se necesitan "+resultado+" mts de alambre");
}
function Circulo () 
{
var circunferencia;
var radioCir;
radioCir=Radio.value;	
radioCir=parseInt(radioCir);
resultado= ((radioCir*3.14)*2)*3;
alert("se necesitan "+resultado+" mts de alambre");
}
function Materiales () 
{
	
}