import { pool } from '../db.js';
import jwt from 'jsonwebtoken';
import config from '../config.js';

const { SECRET } = config;

// Controlador para la ruta POST '/login'
export const accesLogin = async (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM login WHERE username = ? AND password = ?';

  try {
    const result = await pool.query(query, [username, password]);
    if (result[0].length === 0) {
      return res.status(404).json({ message: 'Usuario o contraseña incorrectos' });
    } else {
      const token = await jwt.sign({ username, password }, SECRET, { expiresIn: '1h' });
      return res.status(200).json({ message: 'Login exitoso', user: result[0], token });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los datos de login', error: error.message });
  }
};

// Controlador para la ruta GET '/login'
export const getLogin = async (req, res) => {
  const queryViewLogin = 'SELECT * FROM login';
  try {
    const [rows] = await pool.query(queryViewLogin);
    if (rows.length === 0) {
      res.status(404).json({ message: 'No se encontraron registros de login' });
    } else {
      res.json(rows); // Enviar los datos como JSON
    }
  } catch (error) {
    console.error('Error ejecutando la consulta:', error);
    res.status(500).json({ error: 'Error al obtener los datos de login' });
  }
};
