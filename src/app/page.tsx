import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rss } from "lucide-react";
import CycloneSummaryCard from "@/components/cyclone-summary-card";
import LocalWeather from "@/components/local-weather";
import { activeCyclones } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InteractiveMap from "@/components/interactive-map";


export default function Home() {
  const lastUpdated = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  return (
    <div className="min-h-screen bg-[url('/storm-bg.png')] bg-cover bg-fixed bg-center relative">
      {/* Overlay layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-gray-900/80 to-black/80 z-0" />

      {/* Content wrapper with blur */}
      <div className="relative z-10 backdrop-blur-lg bg-white/10 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl font-extrabold text-white font-headline drop-shadow-md">
                Cyclone Dashboard
              </h1>
              <p className="text-gray-300">
                Namaste! Here’s Your Current Cyclone Update.
              </p>
            </div>
            <p className="text-sm text-gray-300 mt-2 md:mt-0">
              Last updated: {lastUpdated} (IST)
            </p>
          </div>

          {/* Weather + Cyclone Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <LocalWeather />
            </div>
            <aside className="lg:col-span-1 space-y-8">
              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Rss className="text-cyan-300" />
                    Active Storms
                  </CardTitle>
                  <CardDescription className="text-gray-200">
                    Cyclones currently on our radar.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activeCyclones.slice(0, 3).map((cyclone) => (
                    <CycloneSummaryCard key={cyclone.id} cyclone={cyclone} />
                  ))}
                  <Button
                    variant="outline"
                    className="w-full border-cyan-300 text-cyan-200 hover:bg-cyan-800 hover:text-white"
                    asChild
                  >
                    <Link href="/forecast">
                      View All Forecasts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>

          {/* Live Map */}
          <Card className="mt-8 bg-white/20 backdrop-blur-sm border border-white/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Live Cyclone Map</CardTitle>
              <CardDescription className="text-gray-300">
                Track storms in real-time and view their projected paths.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden border border-white/30">
                <InteractiveMap />
              </div>
              <Button
                className="mt-4 bg-cyan-700 text-white hover:bg-cyan-600"
                asChild
              >
                <Link href="/map">
                  Open Interactive Map
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
