import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

//routes 
import { Home } from "../components/home"
import { StravaData } from '../components/strava';
import { SideBar } from '../sidebar';
import { Footer } from '../components/footer';


function App() {
  return (
    <div>
      <Home />
      <StravaData />
      <Footer />
    </div>
    
  );
}

export default App;
