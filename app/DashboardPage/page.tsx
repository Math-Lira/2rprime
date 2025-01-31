import React from "react";
import Indicators from "../components/GlobalGraphics/GraphicIndicators/Indicators";
import LineCharts from "../components/GlobalGraphics/LineCharts/LineCharts";
import PieChart from "../components/GlobalGraphics/PieChart/PieChart";

export default function DashboardPage() {
  return (
    <div>
        <Indicators />
        <div className="flex gap-6">
        <div className="w-1/2">
          <LineCharts />
        </div>
        <div className="w-1/2">
          <PieChart />
        </div>
      </div>
    </div>
  )
}