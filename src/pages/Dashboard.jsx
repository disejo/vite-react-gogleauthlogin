import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router';

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <div>
          <Link to="/profile">Mi Perfil</Link>
        </div>
      )}
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};