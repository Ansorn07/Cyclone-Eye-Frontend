import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Droplets, Wind, MapPin, Sunrise, Sunset, Eye } from "lucide-react";

export default function LocalWeather() {
    return (
        <Card className="h-full bg-cover bg-center bg-no-repeat bg-[url('/cardimage.png')] ">
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2 ">
                    <MapPin className="w-6 h-6 text-primary"/>
                    <span >Bhubaneswar, Odisha</span>
                </CardTitle>
                <CardDescription className="font-bold dark:text-gray-100" >Current Conditions</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        {/* 👇 Custom Weather Image */}
                        <img
                            src="/weather-visual.png"
                            alt="Weather Visual"
                            className="w-20 h-20 object-contain"
                        />
                        <div>
                            <p className="text-6xl font-bold  dark:text-gray-100">32°C</p>
                            <p className="text-muted-foreground">Partly Cloudy</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                        <div className="flex items-center gap-3">
                            <Droplets className="w-5 h-5 text-primary"/>
                            <div>
                                <p className="text-muted-foreground  dark:text-gray-100">Humidity</p>
                                <p className="font-semibold">78%</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Wind className="w-5 h-5 text-primary"/>
                            <div>
                                <p className="text-muted-foreground  dark:text-gray-100">Wind</p>
                                <p className="font-semibold">12 km/h</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 ">
                            <Eye className="w-5 h-5 text-primary"/>
                            <div>
                                <p className="text-muted-foreground  dark:text-gray-100">UV Index</p>
                                <p className="font-semibold">High</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Sunrise className="w-5 h-5 text-primary"/>
                            <div>
                                <p className="text-muted-foreground  dark:text-gray-100">Sunrise</p>
                                <p className="font-semibold">5:45 AM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Sunset className="w-5 h-5 text-primary"/>
                            <div>
                                <p className="text-muted-foreground  dark:text-gray-100">Sunset</p>
                                <p className="font-semibold">6:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
