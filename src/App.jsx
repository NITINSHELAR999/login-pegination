import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <main>
      <Routes>
      <Route path="/" element={<Login/>} />
  
                <Route path='reg' element={<Register/>}/>
                
         
      
      </Routes>
    </main>
  );
}

export default App;