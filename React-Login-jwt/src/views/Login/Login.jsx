import { useState } from 'react';
import './Login.css'; 
import { useRequest } from '../../hooks/useRequest';
import { validatelogin } from '../../Endpoints/login';

export const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const {response, loading, error, makeRequest} = useRequest(validatelogin(formData));

  const handleLogin = (e) => {
    e.preventDefault();
    makeRequest();
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
