import { RoutesList } from "./../RoutesList/RoutesList";
import { MapComponent } from "../MapComponent/MapComponent";
import "./MapRoutes.scss";

export const MapRoutes = () => {
  return (
    <div className='mapRoutes'>
      <RoutesList />
      <MapComponent />
    </div>
  );
};
