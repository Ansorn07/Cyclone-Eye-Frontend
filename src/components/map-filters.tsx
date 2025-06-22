'use client'

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function MapFilters() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="region-select">Region</Label>
                <Select>
                    <SelectTrigger id="region-select">
                        <SelectValue placeholder="All Regions" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Regions</SelectItem>
                        <SelectItem value="atlantic">Atlantic Ocean</SelectItem>
                        <SelectItem value="pacific">Pacific Ocean</SelectItem>
                        <SelectItem value="indian">Indian Ocean</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Separator />

            <div className="space-y-4">
                <h4 className="font-medium">Map Layers</h4>
                <div className="flex items-center justify-between">
                    <Label htmlFor="historical-paths" className="flex-grow">Historical Paths</Label>
                    <Switch id="historical-paths" />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="satellite-view" className="flex-grow">Satellite View</Label>
                    <Switch id="satellite-view" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="wind-speed" className="flex-grow">Wind Speed</Label>
                    <Switch id="wind-speed" />
                </div>
            </div>
        </div>
    )
}
