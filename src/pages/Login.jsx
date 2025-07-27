import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    login(credentialResponse); // Guardamos el usuario en el contexto
    navigate('/dashboard'); // Redirigimos al dashboard
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        logo_alignment="left"
        theme="outline"
        text="signin_with"
        type="standard" 
        shape="rectangular"
        size="large"
        width="300px"
        ux_mode="popup"
        auto_select={false}
        cookie_policy={'single_host_origin'}
        prompt="select_account"
        response_type="code"
        scope="profile email"
      />
    </div>
  );
};