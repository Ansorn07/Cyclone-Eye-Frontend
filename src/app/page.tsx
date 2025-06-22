import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rss } from "lucide-react";
import CycloneSummaryCard from "@/components/cyclone-summary-card";
import LocalWeather from "@/components/local-weather";
import { activeCyclones } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import InteractiveMap from "@/components/interactive-map";

export default function Home() {
  const lastUpdated = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold font-headline">Cylone Dashboard</h1>
          <p className="text-muted-foreground">Namaste! Here’s Your Current Cylone Update.</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2 md:mt-0">Last updated: {lastUpdated} (IST)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <LocalWeather />
        </div>
        <aside className="lg:col-span-1 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rss className="text-primary"/>
                Active Storms
              </CardTitle>
              <CardDescription>Cyclones currently on our radar.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeCyclones.slice(0, 3).map((cyclone) => (
                <CycloneSummaryCard key={cyclone.id} cyclone={cyclone} />
              ))}
              <Button variant="outline" className="w-full" asChild>
                <Link href="/forecast">
                  View All Forecasts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Live Cyclone Map</CardTitle>
          <CardDescription>Track storms in real-time and view their projected paths.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg overflow-hidden border">
            <InteractiveMap />
          </div>
          <Button className="mt-4" asChild>
            <Link href="/map">
              Open Interactive Map <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
