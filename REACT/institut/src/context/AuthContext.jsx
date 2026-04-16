import { createContext, useContext, useState } from "react";
import AuthService from "../services/AuthService";

// conteneur global accessible depuis n'import où
const AuthContext = createContext(null);

// composant qui va entourer toute l'appli
export function AuthProvider({ children }) {
  // si user est connecté, reste connecté après un refresh
  const [user, setUser] = useState(AuthService.getUser());

  const login = async (login, mdp) => {
    const data = await AuthService.login(login, mdp);
    setUser(data.user); // met à jour l'etat - le re-render

    return data;
  };

  const logout = () => {
    AuthService.logout();
    setUser(null); // met à jour l'etat - le re-render
  };

  const value = {
    user,
    login,
    logout,
    isConnected: !!user,
    isAdmin: user?.role === "ADMIN",
  };

  // values accessibles aux enfants
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => useContext(AuthContext);
