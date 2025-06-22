"use client";

import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export default function OpenLayersMap() {
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
        center: [8948882.8, 2253768.4], // Approx center of India in Web Mercator
        zoom: 5,
      }),
    });

    return () => map.setTarget(undefined); // Clean up
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-[500px] rounded-lg border shadow-md"
    />
  );
}
