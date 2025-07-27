import { useAuth } from '../context/AuthContext';
import { Link, Navigate } from 'react-router';

export const Profile = () => {

    const { user } = useAuth();

    if (!user) {
        // Si no hay usuario, redirigir a la página de login
        return <Navigate to="/login" />;
    }

    return (
        <div>
        <h1>Profile</h1>
        {user && (
            <div>
                <Link to='/dashboard'>Escritorio</Link>
                <h2>Bienvenido, {user.name}</h2>
                <p>Email: {user.email}</p>
                <img src={user.picture} alt="Foto de perfil" />
            </div>
        )}
        </div>
    );
};