import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { mapStyle } from "../assets/mapStyle";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

const InitializeMap = ({ lng, lat, zoom, onMapLoad }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    console.log("Initializing map...");
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );
    map.current.on("load", () => {
      onMapLoad(map.current);
    });
  }, []);

  return <div ref={mapContainer} className="map-container" />;
};

export default InitializeMap;
