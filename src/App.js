import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import About from './components/About';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState("");
  const [modeBtnText, setModeBtnText] = useState('Night mode on');
  const handleSwitch = () => {
    if (mode === "light") {
      setMode('dark');
      setModeBtnText('Night mode off')
      document.body.style.backgroundColor = "#010825"
      document.body.style.color = "white"
      showAlert("Night mode on", "success");
    } else {
      setMode('light');
      setModeBtnText('Night mode on')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#010825"
      showAlert("Night mode off", "danger");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <BrowserRouter>
      <>
        <Navbar title="TextUtils" aboutUsText="About Us" mode={mode} modeBtnText={modeBtnText} handleSwitch={handleSwitch} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<div className="container mt-4"><TestForm formTitle="Try Testutils | Analyse your text" mode={mode} showAlert={showAlert} /> </div>}/>
          <Route path="/about"  element={<About />} />
            
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
