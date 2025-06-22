'use client';

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, MapPin, Gauge } from "lucide-react";
import { type Cyclone } from "@/lib/data";
import { cn } from "@/lib/utils";

type Props = {
  cyclone: Cyclone;
};

const severityConfig = {
  low: "border-severity-green",
  moderate: "border-severity-yellow",
  high: "border-severity-orange",
  extreme: "border-severity-red",
};

export default function CycloneSummaryCard({ cyclone }: Props) {
  const config = severityConfig[cyclone.severity];

  return (
    <Card
      className={cn(
        "transition-all duration-300 ease-in-out group border-l-4",
        "hover:shadow-md",
        config
      )}
    >
      <CardHeader className="p-4 pb-0">
        <CardTitle className="flex items-center justify-between text-base">
          <span className="font-headline">{cyclone.name}</span>
          <Wind className="w-5 h-5 text-primary transition-transform group-hover:rotate-45" />
        </CardTitle>
        <CardDescription className="text-xs">
          Alert for: <span className="font-semibold text-foreground">{cyclone.location}</span>
        </CardDescription>
      </CardHeader>

      {/* ✅ Cyclone Image */}
      <div className="px-4 pt-4">
        <Image
          src={cyclone.imageUrl || "/asani.jpg"}
          alt={cyclone.name}
          width={300}
          height={200}
          className="rounded-md object-cover w-full h-48"
        />
      </div>

      <CardContent className="p-4 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Gauge className="w-4 h-4" />
          <span>Category {cyclone.category} Storm</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Wind className="w-4 h-4" />
          <span>{cyclone.wind_speed} km/h winds</span>
        </div>
      </CardContent>
    </Card>
  );
}
