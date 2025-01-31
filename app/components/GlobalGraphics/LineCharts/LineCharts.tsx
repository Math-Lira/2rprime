"use client";

import React, { useEffect } from "react";
import { buildChart } from "./utils/BuildChart"; // Confirme se a importação está correta

// Função que inicializa o gráfico
function initializeChart() {
  const chartContainer = document.querySelector("#hs-curved-line-charts");

  // Remove gráficos anteriores antes de criar um novo
  if (chartContainer?.children.length) {
    chartContainer.innerHTML = "";
  }

  buildChart("#hs-curved-line-charts", {
    chart: {
      height: 250,
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    series: [
      { name: "Income", data: [0, 27000, 25000, 27000, 40000] },
      { name: "Outcome", data: [19500, 10000, 19000, 17500, 26000] },
      { name: "Others", data: [8000, 2200, 6000, 9000, 10000] },
    ],
    colors: ["#8DD703", "#04694A", "#65E08B"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: [4, 4, 4], dashArray: [0, 0, 4] },
    title: { text: "" },
    legend: { show: false },
    grid: { strokeDashArray: 0, borderColor: "#e5e7eb", padding: { top: -20, right: 0 } },
    xaxis: {
      type: "category",
      categories: [
        "25 January 2023",
        "28 January 2023",
        "31 January 2023",
        "1 February 2023",
        "3 February 2023",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
      labels: {
        offsetY: 5,
        style: {
          colors: "#9ca3af",
          fontSize: "13px",
          fontFamily: "Inter, ui-sans-serif",
          fontWeight: 400,
        },
        formatter: (title?: string) => {
          if (!title) return "";
          const newT = title.split(" ");
          return `${newT[0]} ${newT[1]?.slice(0, 3) || ""}`;
        },
      },
    },
    yaxis: {
      min: 0,
      max: 40000,
      tickAmount: 4,
      labels: {
        align: "left",
        minWidth: 0,
        maxWidth: 140,
        style: {
          colors: "#9ca3af",
          fontSize: "12px",
          fontFamily: "Inter, ui-sans-serif",
          fontWeight: 400,
        },
        formatter: (value: number) => (value >= 1000 ? `${value / 1000}k` : value.toString()),
      },
    },
  });
}

// Componente principal
export default function LineCharts() {
  useEffect(() => {
    initializeChart();
  }, []);

  return (
    <div className="border border-gray-200 rounded-xl shadow-lg p-4 bg-white">
      <div className="flex justify-center sm:justify-end items-center gap-x-4 mb-3 sm:mb-6">
        <div className="inline-flex items-center">
          <span className="size-2.5 inline-block bg-Green rounded-sm me-2"></span>
          <span className="text-[13px] text-gray-600">Income</span>
        </div>
        <div className="inline-flex items-center">
          <span className="size-2.5 inline-block bg-darkGreen rounded-sm me-2"></span>
          <span className="text-[13px] text-gray-600">Outcome</span>
        </div>
        <div className="inline-flex items-center">
          <span className="size-2.5 inline-block bg-lightGreen rounded-sm me-2"></span>
          <span className="text-[13px] text-gray-600">Others</span>
        </div>
      </div>

      <div id="hs-curved-line-charts"></div>
    </div>
  );
}
