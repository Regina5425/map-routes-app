import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import cls from "./MapComponent.module.scss";
import { setCenter, setZoom } from "../../store/reducers/mapViewSlice";
import {
  getMapViewCenter,
  getMapViewZoom,
} from "./../../store/selectors/mapViewSelector";
import {
  getRoutesState,
  getMarkers,
} from "../../store/selectors/routesSelectors";
import { getErrorRoutes } from "./../../store/selectors/errorsSelectors";
const polyline = require("@mapbox/polyline");

export const MapComponent = () => {
  const dispatch = useDispatch();
  const routesArr = useSelector(getRoutesState);
  const markers = useSelector(getMarkers);
  const errorRoutes = useSelector(getErrorRoutes);

  const [geo, setGeo] = useState([]);

  const center = useSelector(getMapViewCenter);
  const zoom = useSelector(getMapViewZoom);

  useEffect(() => {
    dispatch(setCenter(center));
    dispatch(setZoom(zoom));
  }, [dispatch, center, zoom]);

  useEffect(() => {
    if (routesArr.length !== 0) {
      setGeo(polyline.decode(routesArr[0].geometry));
    }
  }, [routesArr]);

  return (
    <div id='map' className={cls.map}>
      {errorRoutes ? (
        <h2>{errorRoutes}</h2>
      ) : (
        <MapContainer center={center} zoom={zoom}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {geo.length !== 0 && (
            <>
              <Polyline positions={geo} />
              {markers.flatMap((marker) => (
                <Marker position={marker} key={marker[1]} />
              ))}
            </>
          )}
        </MapContainer>
      )}
    </div>
  );
};
