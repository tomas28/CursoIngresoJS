/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var descuento;
 	var marca; 
 	var precioConDescuento;
 	var precioBruto;
 	var descuento;

 	cantidadLamparas=Cantidad.value;
 	marca=Marca.value;
 	precioConDescuento=precioDescuento.value;
 	precioBruto=cantidadLamparas*35;

	if (cantidadLamparas>=6) 
	{
		descuento=precioBruto*50/100
		
	}
	if (cantidadLamparas==5) 
	{
		if (marca=="ArgentinaLuz") 
		{
			descuento=precioBruto*40/100
			
		}
		else
		{
			descuento=precioBruto*30/100
		}

	
	if (cantidadLamparas<=4) 
	{
		if (marca=="ArgentinaLuz" !! marca=="FelipeLamparas") 
		{
			descuento=precioBruto*25/100
			
		}
		else
		{
			descuento=precioBruto*20/100			
		}
		if (cantidadLamparas==3) 
		{
			if (marca=="ArgentinaLuz") 
			{
				descuento=precioBruto*15/100	
			}
			if (marca=="FelipeLamparas") 
			{
		} 		descuento=precioBruto*10/100
			}
			else
			{
				descuento=precioBruto*20/100
			}			
		}//(cantidadLamparas==3) 

	}//cantidadLamparas<=4)

console.log(precioConDescuento)
precioConDescuento=precioBruto-descuento;

}
