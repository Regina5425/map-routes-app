import React from "react";
import cls from "./App.module.scss";
import { Title } from "../components/Title/Title";
import { MapRoutes } from "../components/MapRoutes/MapRoutes";

function App() {
  return (
    <div className={cls.app}>
      <Title />
      <MapRoutes />
    </div>
  );
}

export default App;
