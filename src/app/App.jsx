import React from "react";
import { Title } from "../components/Title/Title";
import { MapRoutes } from "../components/MapRoutes/MapRoutes";
import cls from "./App.module.scss";

function App() {
  return (
    <div className={cls.app}>
      <Title />
      <MapRoutes />
    </div>
  );
}

export default App;
