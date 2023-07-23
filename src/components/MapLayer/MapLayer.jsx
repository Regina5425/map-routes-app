import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TileLayer, Marker, Polyline } from "react-leaflet";
import {
  getRoutesState,
  getMarkers,
} from "../../store/selectors/routesSelectors";
import {
  getMapViewCenter,
  getMapViewZoom,
} from "../../store/selectors/mapViewSelector";
import { AutoCenter } from "./AutoCenter";

const polyline = require("@mapbox/polyline");

export const MapLayer = () => {
  const routesArr = useSelector(getRoutesState);
  const markers = useSelector(getMarkers);
  const center = useSelector(getMapViewCenter);
  const zoom = useSelector(getMapViewZoom);

  const [geo, setGeo] = useState([]);

  useEffect(() => {
    if (routesArr.length !== 0) {
      setGeo(polyline.decode(routesArr[0].geometry));
    }
  }, [routesArr]);

  return (
    <>
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
      <AutoCenter center={center} zoom={zoom} />
    </>
  );
};
