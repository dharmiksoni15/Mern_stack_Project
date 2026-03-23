import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // store token in localStorage and state
  const storeToken = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // important for context
  };

  // Logout
  const LogoutUser = () => {
    localStorage.removeItem("token");
    setToken("");
  };

   const isLoggedIn = !!token;
  return (
    <AuthContext.Provider value={{ storeToken, token,LogoutUser,isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};


// custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};