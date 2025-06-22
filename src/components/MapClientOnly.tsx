"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


const InteractiveMap = dynamic(() => import("./interactive-map"), {
  ssr: false,
  loading: () => <p className="text-center text-sm py-4">Loading map...</p>,
});

export default function MapClientOnly() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <InteractiveMap />;
}
