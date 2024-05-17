import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contratos from './components/Contratos/Contratos';
import Sueldos from './components/Sueldos/Sueldos';
import Trabajadores from './components/Trabajadores/Trabajadores';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/Contratos"
            element={
              <>
                <Navbar />
                <Contratos />
              </>
            }
          />
          <Route
            path="/Sueldos"
            element={
              <>
                <Navbar />
                <Sueldos />
              </>
            }
          />
          <Route
            path="/Trabajadores"
            element={
              <>
                <Navbar />
                <Trabajadores />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
