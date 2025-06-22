import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const legendItems = [
    { color: 'bg-green-500', label: 'Category 1' },
    { color: 'bg-yellow-500', label: 'Category 2' },
    { color: 'bg-orange-500', label: 'Category 3' },
    { color: 'bg-red-500', label: 'Category 4' },
    { color: 'bg-purple-700', label: 'Category 5' },
];

export default function MapLegend() {
    return (
        <Card className="transform hover:-translate-y-1 transition-transform duration-300">
            <CardHeader>
                <CardTitle>Map Legend</CardTitle>
                <CardDescription>Saffir-Simpson Scale</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {legendItems.map(item => (
                    <div key={item.label} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full ${item.color}`}></div>
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
