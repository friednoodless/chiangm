import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//routes
import { Home } from "../components/home";
import { StravaData } from "../components/strava";
import { SideBar } from "../sidebar";
import { Footer } from "../components/footer";
import { Photos } from "../components/photos";
import { Header } from "../header";
import { Links } from "../components/links";

function App() {
  return (
    <div>
      <Header>
        <StravaData />
        <Photos />
        <Links />
      </Header>
      <Home />

      <Footer />
    </div>
  );
}

export default App;
