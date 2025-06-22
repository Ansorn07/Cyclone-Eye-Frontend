"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart';

type ForecastChartProps = {
    data: {
        day: string;
        wind_speed: number;
        pressure: number;
    }[];
}

export default function ForecastChart({ data }: ForecastChartProps) {
    const chartConfig = {
      wind_speed: {
        label: "Wind Speed (km/h)",
        color: "hsl(var(--primary))",
      },
      pressure: {
        label: "Pressure (hPa)",
        color: "hsl(var(--destructive))",
      },
    }

    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" stroke="hsl(var(--primary))" />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--destructive))"/>
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="wind_speed" name="Wind Speed (km/h)" stroke="hsl(var(--primary))" strokeWidth={2} dot={false}/>
                <Line yAxisId="right" type="monotone" dataKey="pressure" name="Pressure (hPa)" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
    )
}
