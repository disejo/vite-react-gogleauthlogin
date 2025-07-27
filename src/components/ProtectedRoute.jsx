import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Si no hay usuario, redirigir a la página de login
    return <Navigate to="/login" />;
  }

  // Si hay un usuario, renderizar el componente hijo (la página protegida)
  return children;
};