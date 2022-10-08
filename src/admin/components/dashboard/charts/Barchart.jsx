import { Box } from "@mui/material";
import React from "react";
import {
  BarChart,
  CartesianAxis,
  Bar,
  YAxis,
  XAxis,
  ResponsiveContainer,
} from "recharts";
function Barchart() {
  const data = [
    { name: "A", x: 12, y: 23, z: 122 },
    { name: "B", x: 22, y: 3, z: 73 },
    { name: "C", x: 13, y: 15, z: 32 },
    { name: "D", x: 44, y: 35, z: 23 },
    { name: "E", x: 35, y: 45, z: 20 },
    { name: "F", x: 62, y: 25, z: 29 },
    { name: "G", x: 37, y: 17, z: 61 },
    { name: "H", x: 28, y: 32, z: 45 },
    { name: "I", x: 19, y: 43, z: 93 },
  ];
  return (
    <ResponsiveContainer height={300} width="100%">
      <BarChart
        style={{
          background: "white",
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          alignItem: "center",
          justifyContent: "center",
          marginTop: 10,
          padding: 10,
          paddingLeft: 0,
        }}
        data={data}
      >
        <CartesianAxis/>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="x" stackId="a" fill="#131d33" />
        <Bar dataKey="y" stackId="a" fill="rgb(250, 153, 40)" />
        <Bar dataKey="x" stackId="a" fill="#B7CFDC" />
        <Bar dataKey="y" stackId="a" fill="#CBE6EF" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Barchart;
