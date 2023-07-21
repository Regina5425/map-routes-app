import cls from "./MapRoutes.module.scss";
import { RoutesList } from "./../RoutesList/RoutesList";
import { MapBlock } from "../MapBlock/MapBlock";

export const MapRoutes = () => {
  return (
    <div className={cls.mapRoutes}>
      <RoutesList />
      <MapBlock />
    </div>
  );
};
