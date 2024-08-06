import React from 'react';
import MainPage from './container/main/MainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainGamePage from './container/NumberTest/MainGamePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/game' element = {<MainGamePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

