import React, { useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const defaultData = [
  {
    id: 1,
    x: "Jan",
    y: 5,
  },
  {
    id: 1,
    x: "Nov",
    y: 4,
  },
];

function MyChart() {
  const [myChartData, setmyChartData] = useState({
    labels: defaultData.map((data) => data.x),

    datasets: [
      {
        label: "show chart",
        data: defaultData.map((data) => data.y),
        backgroundColor: [
          "yellow",
          "skyblue",
          "orange",
          "green",
          "red",
          "blue",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  const [chartType, setChartType] = useState("Bar");

  const handleChange = (e) => {
    setChartType(e.target.value);
  };

  return (
    <div>
      <TextField
        fullWidth
        id='outlined-helperText'
        label='X axis labels'
        defaultValue=''
        size='small'
        sx={{
          border: "none",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        onChange={(e) => {
          setmyChartData({
            ...myChartData,
            labels: e.target.value.split(","),
          });
        }}
      />
      <TextField
        fullWidth
        id='outlined-helperText'
        label='Y axis labels'
        defaultValue=''
        size='small'
        sx={{ border: "none", marginTop: "10px", marginBottom: "25px" }}
        onChange={(e) => {
          setmyChartData({
            ...myChartData,
            datasets: [
              {
                ...myChartData.datasets[0],
                data: e.target.value.split(",").map((data) => parseInt(data)),
              },
            ],
          });
        }}
      />
      {chartType === "Bar" ? (
        <Bar data={myChartData} />
      ) : chartType === "Line" ? (
        <Line data={myChartData} />
      ) : chartType === "Pie" ? (
        <Pie data={myChartData} />
      ) : (
        <Doughnut data={myChartData} />
      )}

      <FormControl sx={{ margin: "25px" }}>
        <RadioGroup value={chartType} onChange={handleChange}>
          <FormControlLabel value='Bar' control={<Radio />} label='Bar chart' />
          <FormControlLabel
            value='Line'
            control={<Radio />}
            label='Line chart'
          />
          <FormControlLabel value='Pie' control={<Radio />} label='Pie chart' />
          <FormControlLabel
            value='Doughnut'
            control={<Radio />}
            label='Doughnut chart'
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
export default MyChart;
