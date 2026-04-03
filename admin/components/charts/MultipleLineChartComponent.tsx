"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A multiple line chart"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig


export default function MultipleLineChartComponent() {

    return (
        <div>
            <h1 className="font-medium text-lg mb-4">User Activity</h1>
            <ChartContainer config={chartConfig}>
                <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Line
                        dataKey="desktop"
                        type="monotone"
                        stroke="var(--color-desktop)"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        dataKey="mobile"
                        type="monotone"
                        stroke="var(--color-mobile)"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ChartContainer>

        </div>

    )

}