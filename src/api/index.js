import axios from "axios";

const BASE_URL = "http://router.project-osrm.org/route/v1/driving";

export const getRouteApi = async (coords) => {
  const data = await axios
    .get(`${BASE_URL}/polyline(${coords})?alternatives=true&geometries=polyline&continue_straight=true`)
    .then((res) => res.data);
  return data;
};
