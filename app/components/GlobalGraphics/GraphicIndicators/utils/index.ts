import ApexCharts from "apexcharts";

export function initializeCharts() {
  const lineCharts = [
    {
      id: "#hs-users-line-chart",
      data: [21, 20, 24, 20, 18, 17, 11, 17, 18, 30, 31, 30, 30, 35, 25, 35, 35, 40, 60, 90, 90, 90, 85, 70, 75, 70, 30, 30, 30, 50, 72],
      name: "Users",
      valuePostfix: "",
    },
    {
      id: "#hs-avg-click-rate-line-chart",
      data: [21, 20, 24, 20, 18, 27, 25, 27, 30, 30, 35, 25, 18, 30, 31, 35, 35, 90, 90, 90, 85, 100, 120, 120, 120, 100, 90, 75, 75, 75, 90],
      name: "Clicks",
      valuePostfix: "",
    },
    {
      id: "#hs-sessions-line-chart",
      data: [25, 48, 10, 11, 11, 15, 60, 60, 60, 75, 21, 20, 24, 20, 38, 37, 35, 37, 30, 120, 120, 120, 100, 90, 75, 90, 90, 90, 75, 70, 60],
      name: "Sessions",
      valuePostfix: "",
    },
    {
      id: "#hs-session-duration-line-chart",
      data: [21, 20, 24, 45, 47, 30, 30, 35, 35, 35, 40, 60, 42, 90, 90, 85, 70, 75, 43, 75, 90, 22, 120, 120, 90, 85, 100, 92, 92, 92, 92],
      name: "Avg. duration",
      valuePostfix: "min",
    },
  ];

  lineCharts.forEach(({ id, data, name, valuePostfix }) => {
    const chartContainer = document.querySelector(id);

    // Verifica se já existe um gráfico e remove
    if (chartContainer && chartContainer.children.length > 0) {
      chartContainer.innerHTML = "";
    }

    const chart = new ApexCharts(chartContainer, {
      series: [{ name, data }],
      chart: { height: 30, type: "line", sparkline: { enabled: true } },
      stroke: { curve: "straight", width: 2 },
      colors: ["#8DD703", "#8DD703", "#8DD703", "#8DD703"],
      xaxis: {
        type: "category",
        categories: Array(31)
          .fill(null)
          .map((_, index) => {
            const date = new Date(2023, 0, 25 + index);
            return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
          }),
        crosshairs: { show: false },
      },
      markers: { hover: { size: 0 } },
      tooltip: {
        marker: { show: false },
        fixed: { enabled: true, position: "bottomLeft", offsetX: 10, offsetY: -15 },
        custom: function (props: { ctx: { opts: { xaxis: { categories: string[] } } }, dataPointIndex: number }) {
          const { categories } = props.ctx.opts.xaxis;
          const { dataPointIndex } = props;
          const title = categories[dataPointIndex]?.split(" ");
          const newTitle = `${title?.[0] || ""} ${title?.[1] || ""}`;

          return `<div class="tooltip">
              <span>${newTitle}</span>
              <span>${valuePostfix}</span>
            </div>`;
        },
      },
    });

    chart.render();
  });
}