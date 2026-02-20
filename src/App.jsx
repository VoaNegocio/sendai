import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MaquinasPage from './pages/MaquinasPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maquinas" element={<MaquinasPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
