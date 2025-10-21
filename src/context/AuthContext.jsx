import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const USERS_DB_KEY = 'usersDB';
const ACCOUNT_DATA_KEY = 'accountData';

const getUsers = () => {
  const users = localStorage.getItem(USERS_DB_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
};

const initMockDB = () => {
  const users = getUsers();
  const adminExists = users.some(u => u.email === 'admin@consulthub.com');
  if (!adminExists) {
    const adminUser = {
      id: 1,
      name: 'Admin',
      email: 'admin@consulthub.com',
      password: 'admin123', 
      role: 'admin',
      industry: 'Management',
      contact: '1234567890'
    };
    saveUsers([adminUser]);
  }
};
initMockDB(); 

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem(ACCOUNT_DATA_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  

  const login = (email, password) => {
    const users = getUsers(); 
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      setUser(foundUser); 
      localStorage.setItem(ACCOUNT_DATA_KEY, JSON.stringify(foundUser));
      return foundUser; 
    } else {
      alert('Invalid credentials. Please try again.');
      return null; 
    }
  };

  const signup = (userData) => {
    const users = getUsers();
    const userExists = users.some(u => u.email === userData.email);

    if (userExists) {
      alert('An account with this email already exists.');
      return false;
    }

    const newUser = {
      ...userData,
      id: users.length + 1,
      role: 'user'
    };
    
    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);

    setUser(newUser);
    localStorage.setItem(ACCOUNT_DATA_KEY, JSON.stringify(newUser));
    return true; 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(ACCOUNT_DATA_KEY);
    navigate('/login');
  };

  const value = {
    user,
    login,
    logout,
    signup
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};