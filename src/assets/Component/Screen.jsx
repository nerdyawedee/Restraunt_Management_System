import * as React from 'react'
import { useEffect } from 'react';
import ProtecHeader from './ProtectHeader.jsx'
import { useNavigate } from 'react-router-dom';
import Hero from './Hero.jsx';
import Cuisine from './Cuisine.jsx'
function Screen() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);
  return (
    <div>
      <ProtecHeader />
      <Hero />
      <Cuisine />
    </div>
  )
}

export default Screen
