import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import cls from "./MapBlock.module.scss";

export const MapBlock = () => {
  const coord = [59.8356, 30.3806];

  const markers = [
    { coords: [59.8466, 30.2949], id: 1 },
    { coords: [59.8293, 30.4242], id: 2 },
    { coords: [59.8356, 30.3806], id: 3 },
    { coords: [59.8276, 30.417], id: 4 },
  ];

  return (
    <div id='map' className={cls.map}>
      <MapContainer center={coord} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {markers.map((marker) => (
          <Marker position={marker.coords} key={marker.id}>
            <Popup>Coord {marker.id}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
