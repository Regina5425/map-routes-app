import { useMap } from "react-leaflet";

export const MyComp = () => {
	const map = useMap();
	console.log('map', map)

	return (
		<div></div>
	)
}