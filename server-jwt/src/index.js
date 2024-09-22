import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import loginRoutes from './routes/login.routes.js';

// Cargar las variables de entorno
dotenv.config();

const app = express();

// Puerto desde la variable de entorno
const port = process.env.PORT || 3000;

// Convertir la variable de entorno en un array de orígenes permitidos
const allowedOrigins = process.env.URL_FRONT_SERVER.split(',');

// Configurar las opciones de CORS
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      // Si no hay origen (solicitud de la misma máquina), permitir
      callback(null, true);
    } else if (allowedOrigins.indexOf(origin) !== -1) {
      // Si el origen está en la lista de permitidos, permitir
      callback(null, true);
    } else {
      // Si no está permitido, devolver un error
      callback(new Error('Origen no permitido por CORS'));
    }
  }
};

// Usar el middleware CORS con las opciones configuradas
app.use(cors(corsOptions));

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/login', loginRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log('Server is running on port:', port);
  console.log(allowedOrigins);
});
