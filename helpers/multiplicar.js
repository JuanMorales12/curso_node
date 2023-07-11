const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  let salida = '';
  let consola = '';

  if (listar) {
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} ${'x'} ${i} ${'='} ${base * i} \n`;
      consola += `${colors.brightWhite(base)} ${colors.brightYellow(
        'x'
      )} ${colors.brightWhite(i)} ${colors.brightYellow(
        '='
      )} ${colors.brightGreen(base * i)} \n`;
    }
    console.log(colors.rainbow('============================='));
    console.log(
      colors.trap('       Tabla del:'),
      colors.bold(colors.brightGreen(base))
    );
    console.log(colors.rainbow('============================='));
    console.log(consola);
  }
  try {
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    return `No se pudo crear el .txt por ${err}`;
  }
};

module.exports = {
  crearArchivo,
};
