// import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './component/MainPage';
import Mealinfo from './component/Mealinfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path='/:mealid' element={<Mealinfo/>}/>
    </Routes>
  );
}

export default App;


