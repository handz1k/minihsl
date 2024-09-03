import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const BikeMarkers = ({ map, data }) => {
  useEffect(() => {
    if (!map || !data) return;

    data.bikeRentalStations.forEach((station) => {
      const el = document.createElement("div");
      el.className =
        station.bikesAvailable > 10
          ? "marker"
          : station.bikesAvailable > 0 && station.bikesAvailable <= 10
          ? "yellow-marker"
          : "red-marker";
      el.innerHTML = `<span><b>${station.bikesAvailable}</b></span>`;

      new mapboxgl.Marker(el)
        .setLngLat([station.lon, station.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${station.name}</h3>
             <p>Bikes available: ${station.bikesAvailable}</p>
             <p>Space available: ${station.spacesAvailable}</p>`
          )
        )
        .addTo(map);
    });
  }, [map, data]);

  return null;
};

export default BikeMarkers;
