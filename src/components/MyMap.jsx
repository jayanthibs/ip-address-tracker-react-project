import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import Mark from "../assets/images/icon-location.svg";
import { useIpContext } from "../context/IpContext";

function MyMap() {
  const { data } = useIpContext();

  const lat = data?.location?.lat ?? 40.7128;
  const lng = data?.location?.lng ?? -74.006;

  const customIcon = L.icon({
    iconUrl: Mark,
    iconSize: [35, 45],
    iconAnchor: [17, 45],
  });

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      className="h-[500px] md:h-[600px] w-full z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[lat, lng]} icon={customIcon} />
    </MapContainer>
  );
}

export default MyMap;
