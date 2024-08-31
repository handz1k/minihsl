import { generateStyle } from "hsl-map-style";

export const mapStyle = generateStyle({
  sourcesUrl: "https://cdn.digitransit.fi/",
  glyphsUrl: "",
  spriteUrl: "",
  queryParams: [ 
    {
      url: "https://cdn.digitransit.fi/",
      name: "digitransit-subscription-key",
      value: import.meta.env.VITE_HSL_KEY,
    },
  ],

  components: {
    // Styles
    base: { enabled: true }, // Enabled by default
    municipal_borders: { enabled: true },
    routes: { enabled: false },
    text: { enabled: true }, // Enabled by default
    subway_entrance: { enabled: false },
    poi: { enabled: false },
    park_and_ride: { enabled: true },
    ticket_sales: { enabled: true },
    stops: { enabled: false },
    citybikes: { enabled: false },
    ticket_zones: { enabled: true },
    ticket_zone_labels: { enabled: false },

    // Themes
    text_sv: { enabled: false },
    text_fisv: { enabled: false },
    text_en: { enabled: false },
    regular_routes: { enabled: false },
    near_bus_routes: { enabled: false },
    routes_with_departures_only: { enabled: false },
    regular_stops: { enabled: false },
    near_bus_stops: { enabled: false },
    print: { enabled: false },
    greyscale: { enabled: false },
    simplified: { enabled: false },
    "3d": { enabled: false },
    driver_info: { enabled: true },
  },
  routeFilter: ["2550", { id: "4570", direction: "2" }, { idParsed: "20" }],
  joreDate: "2022-06-01",
});