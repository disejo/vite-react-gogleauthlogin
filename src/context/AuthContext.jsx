import { createContext, useState, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';

// 1. Crear el Contexto
const AuthContext = createContext(null);

// 2. Crear el Proveedor del Contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentialResponse) => {
    // Decodificamos el token para obtener la información del usuario
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Crear un Hook para usar el Contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  return context;
};