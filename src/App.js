import React from 'react';
import {Routes,Route} from "react-router-dom"
import './App.css';
import Login from './Login'
import Page from './Page';
function App() {
  return (
   
    <Routes>
      <Route  path='/' element={<Login />} />
      <Route path='/Page' element={<Page />} />  
    </Routes>
  
  );
}

export default App;
