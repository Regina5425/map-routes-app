import { useEffect } from "react";
import { MapContainer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import cls from "./MapComponent.module.scss";
import { setCenter, setZoom } from "../../store/reducers/mapViewSlice";
import {
  getMapViewCenter,
  getMapViewZoom,
} from "./../../store/selectors/mapViewSelector";
import { getErrorRoutes } from "./../../store/selectors/errorsSelectors";
import { MapLayer } from "../MapLayer/MapLayer";

export const MapComponent = () => {
  const dispatch = useDispatch();
  const errorRoutes = useSelector(getErrorRoutes);

  const center = useSelector(getMapViewCenter);
  const zoom = useSelector(getMapViewZoom);

  useEffect(() => {
    dispatch(setCenter(center));
    dispatch(setZoom(zoom));
  }, [dispatch, center, zoom]);

  return (
    <div id='map' className={cls.map}>
      {errorRoutes ? (
        <h2>{errorRoutes}</h2>
      ) : (
        <MapContainer center={center} zoom={zoom}>
          <MapLayer />
        </MapContainer>
      )}
    </div>
  );
};
