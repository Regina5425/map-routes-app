import React from "react";
import { TitleMain } from "../components/Title/Title";
import { MapRoutes } from "../components/MapRoutes/MapRoutes";
import "./App.scss";

const App = () => {
  return (
    <div className='app'>
      <TitleMain />
      <MapRoutes />
    </div>
  );
};

export default App;
