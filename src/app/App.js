import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

//routes 
import { Home } from "../pages/home"
import { Header } from '../header';
import { SideBar } from '../sidebar';


function App() {
  return (
    <Home />
  );
}

export default App;
