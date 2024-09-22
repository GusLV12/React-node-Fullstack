import { useEffect } from 'react';
import { getLoginData } from '../../Endpoints/login';
import { useRequest } from '../../hooks/useRequest';

export const Test = () => {
  const { response, loading, error, makeRequest } = useRequest(getLoginData());

  useEffect(() => {
    makeRequest();
    console.log('Respuesta de la peticion:', response);
    console.log('Respuesta del getlogin: ', getLoginData());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!response || !Array.isArray(response) || response.length === 0) return <p>No hay datos que mostrar</p>;

  return (
    <div>
      <h1>Lista de Logins</h1>
      <ul>
        {response.map((login, index) => (
          <li key={index}>
            Username: {login.username}, Password: {login.password}
          </li>
        ))}
      </ul>
    </div>
  );
};
