import cls from "./MapRoutes.module.scss";
import { RoutesList } from "./../RoutesList/RoutesList";
import { MapComponent } from "../MapComponent/MapComponent";

export const MapRoutes = () => {
  return (
    <div className={cls.mapRoutes}>
      <RoutesList />
      <MapComponent />
    </div>
  );
};
