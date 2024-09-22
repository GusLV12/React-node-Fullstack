import { useState } from 'react';
import axios from 'axios';

export const useRequest = (initialConfig) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función que se llama explícitamente para hacer la solicitud
  const makeRequest = async (overrideConfig = {}) => {
    setLoading(true);
    setError(null);

    // Mezclar la configuración inicial con la sobrescrita
    const config = { ...initialConfig, ...overrideConfig };

    try {
      const res = await axios(config);
      setResponse(res.data); // Guardar la respuesta
    } catch (err) {
      setError(err.response?.data?.message || err.message); // Guardar el error si ocurre
    } finally {
      setLoading(false); // Desactivar el loading al finalizar
    }
  };

  return { response, loading, error, makeRequest };
};
