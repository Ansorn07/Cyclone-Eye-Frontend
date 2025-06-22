"use client";

import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj"; // ✅ import this for conversion
import "ol/ol.css";

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([78.9629, 22.5937]), // ✅ Centered on India
        zoom: 5, // ✅ Zoom level adjusted for country view
      }),
    });

    return () => map.setTarget(null); // Clean up
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-96 rounded-lg border border-cyan-400 shadow-lg"
    />
  );
}
