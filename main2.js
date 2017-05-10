var productos = [
{
	nombre: "pijama",
	tipo: "ropa"
},
{
	nombre: "nevera",
	tipo:"electrodomestico"
},
{
	nombre: "asus",
	tipo: "computador"
},
{
	nombre: "macbook",
	tipo: "computador"
},
{
	nombre: "pijama",
	tipo: "ropa"
},
{
	nombre: "toshiba",
	tipo: "computador",
}
];

/* Forma imperativa
var computadores = [];
for (var i = 0; i < productos.length; i++) {
	if(productos[i].tipo === "computador") {
		computadores.push(productos[i]);
	}
}*/


//Forma funcional
	var computadores = productos.filter(function(producto){
		return producto.tipo === "computador";
	});






