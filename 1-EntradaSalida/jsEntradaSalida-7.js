/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var primerNumero 
var segundoNumero 
var resultado 
primerNumero =numeroUno.value
primerNumero = parseInt(primerNumero)
segundoNumero= numeroDos.value
segundoNumero=parseInt(segundoNumero)
resultado = primerNumero+segundoNumero

alert("La suma de los nuneros da: " + resultado);

}

function restar()
{
var primerNumero 
var segundoNumero 
var resultado 
primerNumero =numeroUno.value
primerNumero = parseInt(primerNumero)
segundoNumero= numeroDos.value
segundoNumero=parseInt(segundoNumero)
resultado = primerNumero-segundoNumero

alert("La resta de los nuneros da: " + resultado);

}

function multiplicar()
{ 
var primerNumero 
var segundoNumero 
var resultado 
primerNumero =numeroUno.value
primerNumero = parseInt(primerNumero)
segundoNumero= numeroDos.value
segundoNumero=parseInt(segundoNumero)
resultado = primerNumero*segundoNumero

alert("La multiplicacion de los nuneros da: " + resultado);
}

function dividir()
{
var primerNumero 
var segundoNumero 
var resultado 
primerNumero =numeroUno.value
primerNumero = parseInt(primerNumero)
segundoNumero= numeroDos.value
segundoNumero=parseInt(segundoNumero)
resultado = primerNumero/segundoNumero

alert("La divicion de los nuneros da: " + resultado);	
}

