"use client";

import React, { useEffect } from "react";
import { buildChart } from "./utils/BuildChart";

export default function PieChart() {
  useEffect(() => {
    const chartContainer = document.querySelector("#hs-pie-chart");

    if (chartContainer?.children.length) {
      chartContainer.innerHTML = "";
    }

    buildChart("#hs-pie-chart", {
      chart: {
        height: 300,
        width: "100%",
        type: "pie",
        zoom: {
          enabled: false,
        },
      },
      series: [70, 18, 12],
      labels: ["Direct", "Organic search", "Referral"],
      title: {
        text: "",
      },
      dataLabels: {
        style: {
          fontSize: "14px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "400",
          colors: ["#fff", "#fff", "#1f2937"],
        },
        dropShadow: {
          enabled: false,
        },
        formatter: (value: number) => `${value.toFixed(1)} %`,
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -15,
          },
        },
      },
      legend: {
        show: false,
      },
      stroke: {
        width: 4,
        colors: ["rgb(255, 255, 255)"],
      },
      grid: {
        padding: {
          top: -10,
          bottom: -2,
          left: -9,
          right: -9,
        },
      },
      tooltip: {
        enabled: false,
      },
      states: {
        hover: {
          filter: {
            type: "none",
          },
        },
      },
      colors: ["#04694A", "#8DD703", "#65E08B"],
    });

  }, []);

  return (
<div className="border border-gray-200 rounded-xl shadow-lg p-4 bg-white w-full h-[344px] relative">
  <div className="p-4">
    <div className="h-[300px] flex flex-col justify-center items-center">
      <div id="hs-pie-chart"></div>
    </div>

    <h2 className="absolute top-4 left-7 text-lg font-bold text-gray-800">Mensal</h2>

    {/* 🔹 Posiciona a legenda dentro do quadrado no canto inferior esquerdo */}
    <div className="absolute bottom-4 right-7 flex items-center gap-x-4">
      <div className="inline-flex items-center">
        <span className="size-2.5 inline-block bg-darkGreen rounded-sm me-2"></span>
        <span className="text-[13px] text-gray-600">Income</span>
      </div>

      <div className="inline-flex items-center">
        <span className="size-2.5 inline-block bg-Green rounded-sm me-2"></span>
        <span className="text-[13px] text-gray-600">Outcome</span>
      </div>

      <div className="inline-flex items-center">
        <span className="size-2.5 inline-block bg-lightGreen rounded-sm me-2"></span>
        <span className="text-[13px] text-gray-600">Others</span>
      </div>
    </div>
  </div>
</div>
  );
}
