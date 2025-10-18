"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// TODO: Define chart configuration
// const chartConfig = {
//   revenue: {
//     label: "Revenue",
//     color: "hsl(var(--chart-1))",
//   },
// } satisfies ChartConfig

interface RevenueChartProps {
  data: Array<{
    category: string
    revenue: number
  }>
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue by Category</CardTitle>
        <CardDescription>
          Total revenue for each product category
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* TODO: Implement the chart using ChartContainer and BarChart */}
        {/* 
            Structure:
            <ChartContainer config={chartConfig}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="category" 
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  formatter={(value) => `$${Number(value).toLocaleString()}`}
                />
                <Bar
                  dataKey="revenue"
                  fill="var(--color-revenue)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
        */}
        <div className="text-sm text-muted-foreground">
          Chart component needs to be implemented
        </div>
      </CardContent>
    </Card>
  );
}
