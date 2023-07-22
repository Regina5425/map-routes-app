import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import cls from "./MapComponent.module.scss";
import {
  setCenter,
  setZoom,
  setMarkers,
} from "../../store/reducers/mapViewSlice";
import {
  getMapViewCenter,
  getMapViewZoom,
  getMapViewMarkers,
} from "./../../store/selectors/mapViewSelector";

export const MapComponent = () => {
  const dispatch = useDispatch();

  const center = useSelector(getMapViewCenter);
  const zoom = useSelector(getMapViewZoom);
  const markers = useSelector(getMapViewMarkers);

  useEffect(() => {
    dispatch(setCenter(center));
    dispatch(setZoom(zoom));
    dispatch(setMarkers(markers));
  }, [dispatch, center, zoom, markers]);

  return (
    <div id='map' className={cls.map}>
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {markers.map((marker) => (
          <Marker position={marker.coords} key={marker.id}>
            <Popup>Route {marker.id}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
