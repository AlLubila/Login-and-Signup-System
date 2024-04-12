import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes
import { Login } from './Login';
import { Signup } from './Signup';
import './index.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
