import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InteractiveMap from "@/components/interactive-map";
import MapFilters from "@/components/map-filters";
import MapLegend from "@/components/map-legend";
import OpenLayersMap from "@/components/OpenLayersMap";



export default function MapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline">Interactive Cyclone Map</h1>
        <OpenLayersMap />
        <p className="text-muted-foreground mt-2">
          Track storms in real-time, view their projected paths, and stay ahead of the weather.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-8">
          <Card className="transform hover:-translate-y-1 transition-transform duration-300">
            <CardHeader>
              <CardTitle>Filters & Layers</CardTitle>
            </CardHeader>
            <CardContent>
              <MapFilters />
            </CardContent>
          </Card>
          <MapLegend />
        </aside>

        <main className="lg:col-span-3">
          <Card className="overflow-hidden shadow-lg dark:shadow-primary/10">
            <InteractiveMap />
          </Card>
        </main>
      </div>
    </div>
  );
}
