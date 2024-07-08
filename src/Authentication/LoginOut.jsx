import React from 'react';
import { useAuth } from './AuthContext';

const LoginButton = () => {
  const { login } = useAuth();
  return <button onClick={login}>Login</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth();
  return <button onClick={logout}>Logout</button>;
};

export { LoginButton, LogoutButton };
