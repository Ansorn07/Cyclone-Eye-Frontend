"use client";

import dynamic from "next/dynamic";

// Dynamically import map component with SSR disabled
const InteractiveMap = dynamic(() => import("./interactive-map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function InteractiveMapClient() {
  return <InteractiveMap />;
}
