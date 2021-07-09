import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";



const LineChart = ({ data, color }) => {

  const options = {
    chart: {
      height: 40,
      backgroundColor: "transparent",
      padding: 0
    },
    title: {
      text: "",
    },
    legend: { enabled: false },
    credits: {
      enabled: false,
    },
    xAxis: {
      lineWidth: 0,
      tickWidth: 0,
      title: "",
      labels: {
        enabled: false,
      },
    },
    yAxis: {
      title: "",
      labels: {
        enabled: false,
      },
      gridLineWidth: 0,
    },
    colors: [ color],
    series: [
      {
        marker: {
          enabled: false,
        },
        data: data,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
