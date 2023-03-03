import React, { useEffect } from "react";
import * as echarts from "echarts";

export function Chart1() {
  useEffect(() => {
    // create chart container element
    var chartDom1 = document.getElementById("myChart1");

    // create chart object
    var myChart = echarts.init(chartDom1);

    // set chart options and data
    var option = {
      title: {
        text: "My Pie Chart",
        subtext: "Example Chart Using ECharts",
        left: "center",
      },
      // Tooltip when hover over the item
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      // Chart Details below by color
      legend: {
        orient: "vertical",
        left: "center",
        top: 350,
      },
      series: [
        {
          // Chart
          name: "My Chart",
          type: "pie",
          radius: ["40%", "70%"],
          top: -100,
          avoidLabelOverlap: false,
          // Chart Label
          label: {
            show: false,
            position: "center",
          },
          // Category word
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 335, name: "Category 1" },
            { value: 310, name: "Category 2" },
            { value: 234, name: "Category 3" },
            { value: 135, name: "Category 4" },
            { value: 1548, name: "Category 5" },
          ],
        },
      ],
    };
    // set chart options and render the chart
    option && myChart.setOption(option);
  }, []);

  return <div id="myChart1" style={{ height: 500 }} />;
}
