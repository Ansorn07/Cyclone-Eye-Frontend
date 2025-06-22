import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HistoryTable from "@/components/history-table";

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">Cyclone Archives</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Explore data from past cyclone events. You can search by name, year, or region to understand their impact.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historical Cyclone Data</CardTitle>
          <CardDescription>
            A searchable archive of major cyclones.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <HistoryTable />
        </CardContent>
      </Card>
    </div>
  );
}
