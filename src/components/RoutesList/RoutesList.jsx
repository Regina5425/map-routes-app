import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Divider } from "antd";
import { getAllRoutesPoints } from "./../../store/selectors/routesSelectors";
import { getRoutesData, setMarkers } from "../../store/reducers/routesSlice";
import { setCenter, setZoom } from "../../store/reducers/mapViewSlice";
import "./RoutesList.scss";
const polyline = require("@mapbox/polyline");

export const RoutesList = () => {
  const dispatch = useDispatch();
  const allRoutesPoints = useSelector(getAllRoutesPoints);
  const [selected, setSelected] = useState(0);

  const getRouteOne = () => {
    dispatch(getRoutesData(polyline.encode(allRoutesPoints[0])));
    dispatch(setMarkers(allRoutesPoints[0]));
    dispatch(setCenter(allRoutesPoints[0][1]));
    dispatch(setZoom(12));
    setSelected(1);
  };

  const getRouteTwo = () => {
    dispatch(getRoutesData(polyline.encode(allRoutesPoints[1])));
    dispatch(setMarkers(allRoutesPoints[1]));
    dispatch(setCenter(allRoutesPoints[1][1]));
    dispatch(setZoom(12));
    setSelected(2);
  };

  const getRouteThree = () => {
    dispatch(getRoutesData(polyline.encode(allRoutesPoints[2])));
    dispatch(setMarkers(allRoutesPoints[2]));
    dispatch(setCenter(allRoutesPoints[2][1]));
    dispatch(setZoom(12));
    setSelected(3);
  };

  const routeList = [
    { id: 1, title: "Маршрут №1", fn: getRouteOne },
    { id: 2, title: "Маршрут №2", fn: getRouteTwo },
    { id: 3, title: "Маршрут №3", fn: getRouteThree },
  ];

  return (
    <>
      <ul className='routes'>
        {routeList.map((route) => (
          <li className='route' key={route.id}>
            <Button
              type='text'
              block
              onClick={route.fn}
              className={route.id === selected ? "active" : ""}
            >
              {route.title}
            </Button>
            <Divider />
          </li>
        ))}
      </ul>
    </>
  );
};
