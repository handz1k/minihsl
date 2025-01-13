import {useState } from "react";
import mapboxgl from "mapbox-gl";
import InitializeMap from "./components/InitializeMap";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./App.css";
import BikeMarkers from "./components/BikeMarkers";
import LocationSearch from "./components/LocationSearch";
import useBikeLocationsQuery from "./hooks/useBikeLocationsQuery";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

function App() {
  const [lng, setLng] = useState(24.94);
  const [lat, setLat] = useState(60.17);
  const [zoom, setZoom] = useState(13);
  const [mapInitialized, setMapInitialized] = useState(false);
  const [map, setMap] = useState(null);

  const { loading, error, data } = useBikeLocationsQuery(!mapInitialized);

  const handleMapLoad = (mapInstance) => {
    setMapInitialized(true);
    setMap(mapInstance);
  };

  return (
    <div>
      <InitializeMap
        lng={lng}
        lat={lat}
        zoom={zoom}
        onMapLoad={handleMapLoad}
      />
      {!loading && !error && map && data && (
        <>
        <BikeMarkers map={map} data={data} />
        <LocationSearch token={mapboxgl.accessToken} />
        </>
      )}
    </div>
  );
}

export default App;
