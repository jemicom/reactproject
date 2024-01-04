import { createContext, useContext, useState } from "react";

// 전역데이터를 사용할 준비
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 이름

  const login = (user) => {
    setUser(user);
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

// auth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
