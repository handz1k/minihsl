import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css'
import { CITYBIKE_LOCATIONS } from './graphql/queries';
import { useQuery } from '@apollo/client';
import { mapStyle } from './assets/mapStyle';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY


function App() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(24.94)
  const [lat, setLat] = useState(60.17)
  const [zoom, setZoom] = useState(13)
  const [mapInitialized, setMapInitialized] = useState(false);

  const { loading, error, data } = useQuery(CITYBIKE_LOCATIONS, {
    skip: !mapInitialized,

  });
  // initialize map
  useEffect(() => {
    console.log("Initializing map...");
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [lng, lat],
      zoom: zoom
    })
    map.current.addControl(
      new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }))
    map.current.on('load', () => {
      setMapInitialized(true);

    });
    }, []);

    
    // waiting for query and add markers on map
    useEffect(() => {
      if (data && map.current) {
        let station = 0
        console.log(data)
        for (station of data.bikeRentalStations) {
          const el = document.createElement('div');
          if (station.bikesAvailable > 10) {
            el.className = 'marker';
          } else if (station.bikesAvailable > 0 && station.bikesAvailable <= 10) {
            el.className = 'yellow-marker'
          } else {
            el.className = 'red-marker'
          }
          el.innerHTML = '<span><b>'+ station.bikesAvailable + '</b></span>'
          new mapboxgl.Marker(el).setLngLat([station.lon, station.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
            .setHTML(
              `<h3>${station.name}</h3>
              <p>Bikes available ${station.bikesAvailable}</p>
              <p>Space available ${station.spacesAvailable}`
          
            )
          )
          .addTo(map.current)
        }
      }

    }, [loading, error, data]);
  
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App
