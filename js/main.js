function saludar(){
	respuesta = prompt ("Enter your age: ");
	if (respuesta >= 18){
		alert ("Welcome to G.O.A.T! The best online shoe store.");
	} else {
		alert("Adult supervision is recommended!")
	}
}

saludar ()


class Sneaker {
	constructor (id, marca, modelo, sexo, precio) {
		this.id = id;
		this.marca = marca.toUpperCase();
		this.modelo = modelo.toUpperCase();
		this.sexo = sexo;
		this.precio = precio;
	}
}

const sneaker1 = new Sneaker(1, "Nike", "Air Jordan 1","Men's Shoes", 140);
const sneaker2 = new Sneaker(2, "Nike", "Air Force 1 '07", "Men's Shoes", 110);
const sneaker3 = new Sneaker(3, "Nike", "Air Max 90", "Men's Shoes", 100);
const sneaker4 = new Sneaker(4, "Nike", "Air Blazer Mid '77", "Men's Shoes", 120);
const sneaker5 = new Sneaker(5, "Nike", "P-6000", "Men's Shoes", 160);
const sneaker6 = new Sneaker(6, "Nike", "Cortez", "Men's Shoes", 110);
const sneaker7 = new Sneaker(7, "Nike", "Jordan Delta 3", "Women's Shoes", 130);
const sneaker8 = new Sneaker(8, "Nike", "Air Jordan Low", "Women's Shoes", 120);
const sneaker9 = new Sneaker(9, "Nike", "Air Jordan Elevate", "Women's Shoes", 130);

const Carrito=[]

function agregarACarrito(){
	Carrito.push(sneaker1,sneaker8); 
}

agregarACarrito()

function verCarrito(){
	let total = 0;
	for(elemento of Carrito){
		console.log("ID: "+elemento.id +" ","Product: "+elemento.marca+" "+elemento.modelo+" "+elemento.sexo);
		total += elemento.precio;
	}
	console.log("You're buying " + Carrito.length+ " product/s Your total is: $" + total);
}

verCarrito()