// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import MahasiswaCrud from './components/MahasiswaCrud';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mahasiswa" element={<MahasiswaCrud />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
