import React from 'react';
import { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
// import './App.css';
import mainInit from "../../data/mainScript.js"

const App = () => {
  useEffect(() => {
    mainInit();
  }, []);

  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default App;