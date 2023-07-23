import { useDispatch, useSelector } from "react-redux";
import { getAllRoutesPoints } from "./../../store/selectors/routesSelectors";
import { getRoutesData, setMarkers } from "../../store/reducers/routesSlice";
import { setCenter, setZoom } from "../../store/reducers/mapViewSlice";
import cls from "./RoutesList.module.scss";
const polyline = require("@mapbox/polyline");

export const RoutesList = () => {
  const dispatch = useDispatch();
  const allRoutesPoints = useSelector(getAllRoutesPoints);

  const getRouteOne = () => {
    dispatch(getRoutesData(polyline.encode(allRoutesPoints[0])));
    dispatch(setMarkers(allRoutesPoints[0]));
    dispatch(setCenter(allRoutesPoints[0][1]));
		dispatch(setZoom(12));
  };

  const getRouteTwo = () => {
    dispatch(getRoutesData(polyline.encode(allRoutesPoints[1])));
    dispatch(setMarkers(allRoutesPoints[1]));
		dispatch(setCenter(allRoutesPoints[1][1]));
		dispatch(setZoom(12));
  };

  const getRouteThree = () => {
    dispatch(getRoutesData(polyline.encode(allRoutesPoints[2])));
    dispatch(setMarkers(allRoutesPoints[2]));
		dispatch(setCenter(allRoutesPoints[2][1]));
		dispatch(setZoom(12));
  };

  return (
    <>
      <ul className={cls.routes}>
        <li className={cls.route}>
          <button onClick={getRouteOne}>Маршрут №1</button>
        </li>
        <li className={cls.route}>
          <button onClick={getRouteTwo}>Маршрут №2</button>
        </li>
        <li className={cls.route}>
          <button onClick={getRouteThree}>Маршрут №3</button>
        </li>
      </ul>
    </>
  );
};
