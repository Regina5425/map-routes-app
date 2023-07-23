import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const AutoCenter = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
    map.setZoom(zoom);
  }, [center, map, zoom]);
  return null;
};
