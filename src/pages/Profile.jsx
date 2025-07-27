import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router';

export const Profile = () => {

    const { user } = useAuth();

    return (
        <div>
        <h1>Profile</h1>
        {user && (
            <div>
            <Link to='/Dashboard'>Escritorio</Link>
            <h2>Bienvenido, {user.name}</h2>
            <p>Email: {user.email}</p>
            <img src={user.picture} alt="Foto de perfil" />
            </div>
        )}
        </div>
    );
};