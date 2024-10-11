/**
 * @author: Pablo Ortega
 * @description: Ejercicio 16 - Dado un array de productos, usa reduce para calcular el costo total de todos los productos
multiplicando el precio por la cantidad. Métodos sugeridos: reduce
const productos = [
 { nombre: "Teclado", precio: 25, cantidad: 2 },
 { nombre: "Mouse", precio: 15, cantidad: 3 },
 { nombre: "Monitor", precio: 200, cantidad: 1 },
];
 */

const productos = [
    { nombre: "Teclado", precio: 25, cantidad: 2 },
    { nombre: "Mouse", precio: 15, cantidad: 3 },
    { nombre: "Monitor", precio: 200, cantidad: 1 },
]

const costoTotal = productos.reduce((total, producto)=>{
    return total += (producto.precio * producto.cantidad);
},0);

console.log(costoTotal);


