const pedido = {
  nombre: "",
  apellido:"",
  edad: 0,
  misDatos() {
      return ` Su nombre completo es: ${this.nombre} ${this.apellido} y su edad es: ${this.edad} años`;
  }
};

let persona = prompt("Cuantas personas haran su reserva?");

const pedidos = [];

for (let index = 0; index <persona; index++) {
  
  pedido.nombre = prompt(`Dime solo Tu nombre porfavor, numero ${index}`);
  pedido.apellido = prompt(`Dime tu primer apellido porfavor, numero ${index}`);
  pedido.edad = parseInt(prompt(`Dime tu edad porfavor, numero ${index}`));
  pedidos.push(Object.assign({}, pedido));
}

for (let i = 0; i < pedidos.length; i++) {
  console.log(pedidos[i].misDatos());
}