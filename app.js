const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

console.clear();

//console.log(process.argv);
console.log(argv);

const { base, listar, hasta } = argv;

//console.log(`base de yargs : ${argv}`);

crearArchivo(base, listar, hasta)
  .then((res) => console.log(`Tabla ${res} creada!`))
  .catch((err) => console.log(`Ups! ${err}`));
