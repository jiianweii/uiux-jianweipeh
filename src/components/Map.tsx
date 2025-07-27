import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function MyGoogleMap() {
  const API_KEY = "AIzaSyAqlGDbvbHmbfFYev9lDcdbTenOJOnIzto";
  const tuitionLocation = { lat: 1.3457952, lng: 103.8538849 };

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        className="absolute inset-0"
        defaultCenter={tuitionLocation}
        defaultZoom={17}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <Marker position={tuitionLocation} />
      </Map>
    </APIProvider>
  );
}
