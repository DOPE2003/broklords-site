// src/components/PortfolioChart.jsx
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { getCategorySeries } from "../data/metrics";
import "./Portfolio.css";

export default function PortfolioChart({ category }) {
  const { title, data, color } = getCategorySeries(category);

  return (
    <div className="portfolio-chart-card">
      <div className="chart-header">
        <h3>{title}</h3>
        <span className="chart-sub">Oct 2024 → Now</span>
      </div>

      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity="0.95" />
                <stop offset="100%" stopColor={color} stopOpacity="0.25" />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="rgba(255,255,255,0.06)"
              strokeDasharray="4 4"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tick={{ fill: "rgba(228, 224, 255, 0.8)", fontSize: 12 }}
              tickMargin={8}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fill: "rgba(228, 224, 255, 0.8)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={48}
            />
            <Tooltip
              contentStyle={{
                background: "rgba(20, 20, 32, 0.96)",
                border: "1px solid rgba(193,161,255,0.25)",
                borderRadius: 10,
                color: "#fff",
                fontFamily: "Segoe UI, sans-serif",
              }}
              cursor={{ stroke: "rgba(255,255,255,0.1)" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="url(#lineGrad)"
              strokeWidth={3}
              dot={{ r: 2, fill: color, strokeWidth: 0 }}
              activeDot={{ r: 5, stroke: "#fff", strokeWidth: 1 }}
              animationDuration={500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
