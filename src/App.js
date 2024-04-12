import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import CodeReceiver from './Pages/CodeReceiver';

function App() {
  


  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/oauth/code_receiver" element={<CodeReceiver />} />
       </Routes>
    </>
    
  );
}

export default App;
