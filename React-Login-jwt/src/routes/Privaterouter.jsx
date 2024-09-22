import { Navigate } from 'react-router-dom';

// Componente para proteger rutas
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // Si no hay token, redirigir a la página de login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Si hay token, renderizar el componente protegido
  return children;
};

export default PrivateRoute;
