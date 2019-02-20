function mostrar()
{
var precioHabitacion;
var tarjetaVisa;
var paypal;
var mercadoPago;
var efectivo;
var todoIncluido;
var soloDesayunos;
var formaDePago;
var precioFinal

precioHabitacion=prompt("ingrese el precio del la habitacion");
precioHabitacion=parseInt(precioHabitacion);
formaDePago=prompt("ingrese de que forma quiere pagar, las opciones son: tarjetavisa, paypal, mercadopago, efectivo");


switch(precioHabitacion) 
{
  case "tarjetavisa":
    descuento=(precioHabitacion*10/100);
    precioFinal=precioHabitacion-descuento;
    mensaje="el precio final es: "+precioFinal;
    break;
  case "paypal":
    descuento=precioHabitacion*15/100;
    precioFinal=precioHabitacion-descuento;
    mensaje="el precio final es: "+precioFinal;
    break;
  case "mercadopago":
  	descuento=precioHabitacion*10/100;
    precioFinal=precioHabitacion-descuento;
    mensaje="el precio final es: "+precioFinal;
  	break;
  case "efectivo":
  	descuento=precioHabitacion*20/100;
    precioFinal=precioHabitacion-descuento;
    mensaje="el precio final es: "+precioFinal;
    break;
    default:
    descuento=precioHabitacion*5/100;
    precioFinal=precioHabitacion-descuento;
    mensaje="el precio final es: "+precioFinal;
   
	}

	alert(mensaje);
}
