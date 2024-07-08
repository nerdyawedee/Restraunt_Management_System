// AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    setIsLoggedIn(!!storedUserId); // Set isLoggedIn based on presence of userId
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const getUsers = () => {
    return JSON.parse(localStorage.getItem('users')) || {};
  };

  const setUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  const signup = async (email, password) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const users = getUsers();
      if (users[email]) {
        throw new Error('User already exists');
      }
      const newUserId = Date.now().toString();
      users[email] = { email, password, userId: newUserId };
      setUsers(users);
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const users = getUsers();
      const user = users[email];
      if (user && user.password === password) {
        localStorage.setItem('userId', user.userId);
        setIsLoggedIn(true);
        setUserId(user.userId);
        return true;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('users');
    localStorage.removeItem('userId');
    setUserId('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
