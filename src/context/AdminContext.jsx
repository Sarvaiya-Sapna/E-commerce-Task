import React, { createContext, useState } from 'react';
import { userData } from "../../public/users.json"

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (username, password) => {
    const user = userData.find((i) => i.name == username && i.password == password)
    if (user) {
      setIsAdmin(true);
      return user;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};
