import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import './i18n/index';
import { useTranslation } from 'react-i18next';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:name" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
