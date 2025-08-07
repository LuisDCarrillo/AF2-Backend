
//Modulo estandar para crear una conexion local usando .env
//NOta de LuisC: Asegurarse de tener el archivo .env configurado 
// //correctamente. Luego esto cambiara cuando se trabaje en la nube
// //(si es que se nos da chance)
require('dotenv').config();
const mongoose = require('mongoose');

console.log('MONGO_URI:', process.env.MONGO_URI);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Salir del proceso con error
  }
};

module.exports = connectDB;