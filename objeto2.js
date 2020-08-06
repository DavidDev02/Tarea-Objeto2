if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) { 
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

const pedido = {
  nombre: "",
  apellido:"",
  edad: 0,
  misDatos () {
      return ` su nombre completo es: ${this.nombre} ${this.apellido} y su edad: ${this.edad}`;
  }
};

let persona = prompt("cuantas personas haran su reserva?");

const pedidos = [];

for (let index = 0; index <persona; index++) {
  
  pedido.nombre = prompt(`Dime solo Tu nombre porfavor, numero ${index}`);
  pedido.apellido = prompt(`Dime tu primer apellido porfavor, numero ${index}`);
  pedido.edad = parseInt(prompt(`Dime tu edad porfavor, numero ${index}`));
  pedidos.push(Object.assing({}, pedido));
}

for (let i = 0; i < pedidos.length; i++) {
  console.log(pedidos.misDatos());
}