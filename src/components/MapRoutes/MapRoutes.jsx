import cls from "./MapRoutes.module.scss";
import { RoutesList } from "./../RoutesList/RoutesList";

export const MapRoutes = () => {
  return (
    <div className={cls.mapRoutes}>
      <RoutesList />
      <div className={cls.map}>Карта</div>
    </div>
  );
};
