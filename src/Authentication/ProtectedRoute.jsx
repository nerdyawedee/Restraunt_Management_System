import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Simulate a delay for loading (replace with actual auth check logic)
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoading(false);

      if (!isLoggedIn) {
        const storedUserId = localStorage.getItem('userId');
        if (!storedUserId) {
          navigate('/'); // Redirect to login if no userId found
        }
      }
    };

    checkAuth();
  }, [isLoggedIn, navigate]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return isLoggedIn ? children : null;
};

export default ProtectedRoute;
