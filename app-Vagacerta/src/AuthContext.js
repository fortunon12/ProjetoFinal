// src/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";
export function _storeData(params) {
    
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [usuario, setUsuario] = useState();

  const login = async (usuario) => {
    _storeData(usuario)
    setUsuario(usuario);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    // lógica de logout
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, usuario, setUsuario }}
    >
      {children},
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
