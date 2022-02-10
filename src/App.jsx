import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './data/rootStore';
import './i18n/index';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:name" element={<Detail />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
