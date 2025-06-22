"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, Link as LinkIcon } from "lucide-react";
import ForecastChart from "@/components/forecast-chart";
import { activeCyclones, forecastData, forecastTableData, resourcesData } from "@/lib/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default function ForecastPage() {
  const [selectedCyclone, setSelectedCyclone] = useState(activeCyclones[0].id);
  const cycloneName = activeCyclones.find(c => c.id === selectedCyclone)?.name || "Cyclone";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline">Cyclone Forecasts</h1>
        <p className="text-muted-foreground mt-2">
          Dive into the 5-day forecast for wind speed, pressure, and projected path.
        </p>
      </div>

      <div className="mb-8 max-w-sm mx-auto">
        <Select value={selectedCyclone} onValueChange={setSelectedCyclone}>
          <SelectTrigger>
            <SelectValue placeholder="Select a cyclone" />
          </SelectTrigger>
          <SelectContent>
            {activeCyclones.map((cyclone) => (
              <SelectItem key={cyclone.id} value={cyclone.id}>
                {cyclone.name} ({cyclone.location})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="transform hover:-translate-y-1 transition-transform duration-300">
          <CardHeader>
            <CardTitle>{cycloneName} - Wind & Pressure Trends</CardTitle>
            <CardDescription>
              A graphical view of the storm's potential evolution.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ForecastChart data={forecastData[selectedCyclone as keyof typeof forecastData]} />
          </CardContent>
        </Card>

        <Card className="transform hover:-translate-y-1 transition-transform duration-300">
          <CardHeader>
            <CardTitle>{cycloneName} - Forecast Details</CardTitle>
            <CardDescription>
              Projected positions and intensity for the next 72 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Forecast Time</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Intensity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(forecastTableData[selectedCyclone as keyof typeof forecastData] || []).map(row => (
                  <TableRow key={row.time}>
                    <TableCell>{row.time}</TableCell>
                    <TableCell className="font-code">{row.position}</TableCell>
                    <TableCell>{row.intensity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex gap-4 mt-6">
                <Button>
                    <Download className="mr-2 h-4 w-4"/>
                    Download PDF
                </Button>
                <Button variant="outline">
                    <Download className="mr-2 h-4 w-4"/>
                    Download CSV
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
       <Card className="mt-8 transform hover:-translate-y-1 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Official Forecasting Agencies</CardTitle>
            <CardDescription>For more detailed and official reports, please visit these trusted sites.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {resourcesData.officialAgencies.map(agency => (
              <Link key={agency.name} href={agency.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                <LinkIcon className="mr-2 h-4 w-4"/>
                {agency.name}
              </Link>
            ))}
          </CardContent>
        </Card>
    </div>
  );
}
