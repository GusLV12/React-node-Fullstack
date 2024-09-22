import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Crear el pool de conexiones usando las variables de entorno
export const pool = mysql.createPool({
  host: process.env.DB_HOST, // Host de la base de datos desde el .env
  user: process.env.DB_USER, // Usuario de la base de datos desde el .env
  password: process.env.DB_PASSWORD, // Contraseña de la base de datos desde el .env
  database: process.env.DB_NAME // Nombre de la base de datos desde el .env
});

pool.getConnection()
  .then((connection) => {
    console.log('Conexión a la base de datos exitosa');
    connection.release(); // Liberar la conexión después de usarla
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
