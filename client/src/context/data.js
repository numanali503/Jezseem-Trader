import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const authURL = `https://moja.bzsconnect.com/api`;
  const authURL = `http://localhost:5090/api`;
  return (
    <AuthContext.Provider value={{ authURL }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
