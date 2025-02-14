import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ValentineApp from './ValentineApp';
import YesPage from './YesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ValentineApp />} />
      <Route path="/yes" element={<YesPage />} />
    </Routes>
  );
}

export default App;
