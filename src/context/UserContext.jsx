import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [])
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};
