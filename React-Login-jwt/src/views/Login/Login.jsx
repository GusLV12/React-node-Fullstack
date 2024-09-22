import { useEffect, useState } from 'react';
import './Login.css'; 
import { useRequest } from '../../hooks/useRequest';
import { validatelogin } from '../../Endpoints/login';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();
  const {response, loading, error, makeRequest} = useRequest(validatelogin(formData));

  const handleLogin = async (e) => {
    e.preventDefault();
    // localStorage.clear();
    await makeRequest();
    if(response?.token) {
      localStorage.setItem('token', response.token);
      console.log('Login exitoso, token guardado:', response.token);
      navigate('/home');
    }
    console.log('Respusta de la peticion:', response);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name:", name, "value:", value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    console.log('Respuesta:', response);
    console.log('Token Front: ', response?.token);
  },[response]);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username" // Añadir el atributo name
          onChange={handleInputChange}
          value={formData.username}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password" // Añadir el atributo name
          onChange={handleInputChange}
          value={formData.password}
          required
        />

        <button type="submit">Login</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
};
