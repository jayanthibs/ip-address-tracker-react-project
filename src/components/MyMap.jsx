import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MyMap({data}) {
      const lat = data?.location?.lat ?? 40.7128;
  const lng = data?.location?.lng ?? -74.0060;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      className="h-[500px] w-full z-0"
    //   style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[lat, lng]}>
        {/* <Popup>Hello from React Leaflet!</Popup> */}
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
