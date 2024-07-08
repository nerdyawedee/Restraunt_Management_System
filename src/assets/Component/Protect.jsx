import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem('authToken');

  return isAuthenticated ? (
    <Route element={<Component />} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;
