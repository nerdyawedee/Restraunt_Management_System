import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Authentication/AuthContext';
import ColorInversionHeader from './Component/Header';
import Header1 from './Component/Header1';
import Homepage from './Screen/Homepage';
import Homage1 from './Screen/Homage1';
import Footer from './Component/Footer';
import ProtectedRoute from './Authentication/ProtectedRoute';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Cuisine from './Component/Cuisine';

const App = () => (
  <AuthProvider>
    <Router>
      <ColorInversionHeader />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/homepage1' element={<Homage1 />}/>
        <Route path='/protected' element={<ProtectedRoute><Homage1 /></ProtectedRoute>} />
        <Route path='/cui' element={<Cuisine />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  </AuthProvider>
);

export default App;
