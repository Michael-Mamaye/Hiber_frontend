import { Box } from "@mui/material";
import React from "react";
import {
  CartesianAxis,
  Bar,
  YAxis,
  XAxis,
  PieChart,
  Pie,
  ResponsiveContainer,
} from "recharts";
function Piechart() {
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
  ];

  return (
    <ResponsiveContainer height={300} width="100%">
      <PieChart
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          borderRadius: 10,
          marginTop: 10,
          padding: 10,
        }}
      >
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#131d33"
        />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#fa9928"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Piechart;
