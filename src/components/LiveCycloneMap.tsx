"use client";

import { useEffect, useState } from "react";




const cyclones = [
  {
    id: 1,
    name: "Cyclone Biparjoy",
    lat: 22.5,
    lng: 70.3,
    severity: "Severe",
    region: "Gujarat Coast",
  },
  {
    id: 2,
    name: "Cyclone Mocha",
    lat: 18.9,
    lng: 85.8,
    severity: "Moderate",
    region: "Odisha Coast",
  },
];

export default function LiveCycloneMap() {
  const [key, setKey] = useState(0);

  // Trigger resize and reset map container to prevent errors
  useEffect(() => {
    setKey((prev) => prev + 1);
    setTimeout(() => window.dispatchEvent(new Event("resize")), 300);
  }, []);

  return (
    <section className="bg-background text-foreground rounded-lg border shadow-lg mt-10">
      <h2 className="text-xl font-semibold p-4 border-b bg-muted dark:bg-muted/20">
        Live Cyclone Tracker Map
      </h2>

      <div className="h-[500px] w-full">
        <MapContainer
          key={key}
          center={[21.5, 80.6]}
          zoom={5}
          scrollWheelZoom={false}
          className="h-full w-full z-0 rounded-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
          />

          {cyclones.map((c) => (
            <Marker key={c.id} position={[c.lat, c.lng]}>
              <Popup>
                <strong>{c.name}</strong>
                <br />
                Region: {c.region}
                <br />
                Severity: {c.severity}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
