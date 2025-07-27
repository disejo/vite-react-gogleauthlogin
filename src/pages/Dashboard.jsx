import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

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
          <h2>Bienvenido, {user.name}</h2>
          <p>Email: {user.email}</p>
          <img src={user.picture} alt="Foto de perfil" />
        </div>
      )}
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};