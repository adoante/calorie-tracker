"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export interface DailySummary {
    date: string
    totalCalories: number
}

export interface WeeklySummary {
    weekStart: string
    weekEnd: string
    days: DailySummary[]
}

export interface MonthlySummary {
    month: string
    days: DailySummary[]
}

const mockWeeklySummary: WeeklySummary = {
    weekStart: "2025-11-10",
    weekEnd: "2025-11-16",
    days: [
        { date: "2025-11-10", totalCalories: 2150 },
        { date: "2025-11-11", totalCalories: 1980 },
        { date: "2025-11-12", totalCalories: 2230 },
        { date: "2025-11-13", totalCalories: 2400 },
        { date: "2025-11-14", totalCalories: 2090 },
        { date: "2025-11-15", totalCalories: 1880 },
        { date: "2025-11-16", totalCalories: 2500 },
    ],
}

const chartData = mockWeeklySummary.days.map((day) => ({
    date: day.date,
    calories: day.totalCalories,
}))

const chartConfig = {
    calories: {
        label: "Calories",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function WeeklyCaloriesBarChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Weekly Calories</CardTitle>
                <CardDescription>
                    {mockWeeklySummary.weekStart} - {mockWeeklySummary.weekEnd}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{ left: -20 }}
                    >
                        <XAxis
                            type="number"
                            dataKey="calories"
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            dataKey="date"
                            type="category"
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) =>
                                new Date(value).toLocaleDateString("en-US", { weekday: "short" })
                            }
                        />

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />

                        <Bar
                            dataKey="calories"
                            fill="var(--chart-1)"
                            radius={5}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
