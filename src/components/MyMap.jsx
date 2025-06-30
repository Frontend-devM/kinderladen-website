import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MyMap(){
  const position = [34.434168, 35.8301511];

  return (
    <MapContainer
      center={position}
      zoom={18}
      style={{
        height: "400px",
        width: "90%",
        marginLeft: "5%",
        borderRadius: "20px",
        marginTop: "5%",
        boxShadow: "3px 3px 4px lightgrey",
      }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          المفكر الصغير
          <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
