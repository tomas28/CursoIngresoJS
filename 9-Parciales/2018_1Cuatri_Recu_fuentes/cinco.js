function mostrar()
{
var precioHabitacion;
var descuento;
var formaDePago;
var precioFinal;
var paquete;

precioHabitacion=prompt("ingrese el precio del la habitacion");
precioHabitacion=parseInt(precioHabitacion);
formaDePago=prompt("ingrese de que forma quiere pagar, las opciones son: tarjeta visa, paypal, mercado pago, efectivo");
paquete=prompt("si la forma de pago es con paypal o efectivo puede elegir entre las siguientes opciones: todo incluido y solo desayunos. De lo contrario deje en blanco el casillero.");

switch(formaDePago) 
{
  case "tarjeta visa":
  case "mercado pago":
      descuento=10;
      break;
  
  case "paypal":
      switch (paquete)
      {
        case "todo incluido":
          descuento=25;
           break;
        
        default:
          descuento=15;
      }
      break;
  
  case "efectivo":
      switch(paquete)
      {
          case "todo incluido":
            descuento=35;
            break;

          case "solo desayunos":
            descuento=30;
            break;

          default:
              descuento=20;
      }
    	
      break;

    default:
        descuento=5;
        break;   
	}
  precioFinal=precioHabitacion*descuento/100;
  precioFinal=precioHabitacion-descuento;
	alert("precio final de la compra: $"+precioFinal);

}
