"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const cyclones = [
  { id: 1, name: "Biparjoy", lat: 22.5, lng: 70.3, region: "Gujarat" },
  { id: 2, name: "Mocha", lat: 18.9, lng: 85.8, region: "Odisha" }
];

export default function InteractiveMap() {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    // Wait for the window to load before mounting map (avoid SSR issues)
    if (typeof window !== "undefined") {
      const container = document.getElementById("leaflet-container");
      if (container && (container as any)._leaflet_id) {
        // Remove previously initialized map container
        (container as any)._leaflet_id = null;
      }
      setMapReady(true);
    }
  }, []);


}
