let cantidad: number = 10;
let clientes: string[] = new Array(cantidad);
let facturacion: number[] = new Array(cantidad);
//Cargo ordenado, uno por uno

console.log("Cargando los arreglos de forma ordenada");
let numCliente: number;
let i: number;
let j: number;

for (numCliente = 0; numCliente < cantidad; numCliente++) {
  let cliente = String(prompt(`Cliente ${numCliente + 1} : `));
  let fact = Number(prompt(`Facturación ${numCliente + 1} : `));
  i = 0;
  while (i < numCliente && facturacion[i] > fact) {
    i++;
  }
  for (j = numCliente; j > i; j--) {
    clientes[j] = clientes[j - 1];
    facturacion[j] = facturacion[j - 1];
  }
  clientes[i] = cliente;
  facturacion[i] = fact;
}

for (let posicion: number = 0; posicion < 4; posicion++) {
  console.log(`(${posicion}) ${clientes[posicion]},
     [${facturacion[posicion]}] `);
}
