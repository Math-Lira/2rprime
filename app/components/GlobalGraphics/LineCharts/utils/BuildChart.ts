import ApexCharts, { ApexOptions } from "apexcharts";

export function buildChart(selector: string, options: ApexOptions) {
    const chart = new ApexCharts(document.querySelector(selector), options);
    chart.render();
    return chart;
}