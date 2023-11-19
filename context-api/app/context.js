"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    // Perform login logic
    setUser("John Doe");
  };

  const logoff = () => {
    // Perform logoff logic
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logoff }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
