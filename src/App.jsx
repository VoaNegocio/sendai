import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ObrigadoPage from './pages/ObrigadoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/obrigado" element={<ObrigadoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
