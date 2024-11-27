// webpack.config.js
const path = require('path');

module.exports = {
  entry: './sum.js',  // El archivo de entrada de tu proyecto
  output: {
    filename: 'bundle.js',  // El archivo de salida de Webpack
    path: path.resolve(__dirname, 'dist'), // La carpeta de salida
  },
  mode: 'production',  // Modo de producción para optimización
};

