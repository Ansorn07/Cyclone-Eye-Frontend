'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HistoryTable from "@/components/history-table";

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold font-headline bg-gradient-to-r   dark:text-black from-gray-900 via-slate-700 to-gray-900  text-transparent bg-clip-text drop-shadow-lg">
          🌪️ Cyclone Archives
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-950 dark:text-black font-extrabold ">
          Dive into historical cyclone data. 🔍 Filter by{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-100">Name</span>,{" "}
<span className="font-semibold text-gray-800 dark:text-gray-100">Year</span>, or{" "}
<span className="font-semibold text-gray-800 dark:text-gray-100">Region</span>

          to trace their paths and impacts.
        </p>
      </div>

      {/* Card Section */}
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
