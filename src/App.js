import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Protected from './Protected';
import LogProtected from './Log_Signup_protect';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Protected isAuthenticated={isAuthenticated} children={<Home />} />} />
        <Route path="/login" element={<LogProtected isAuthenticated={isAuthenticated} children={<Login />} />} />
        <Route path="/signup" element={<LogProtected isAuthenticated={isAuthenticated} children={<Signup />} />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

export default App;
