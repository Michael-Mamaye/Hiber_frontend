import { Box, Grid } from "@mui/material";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  PieChart,
  Pie,
} from "recharts";
import Barchart from "./charts/Barchart";
import LastSixMonth from "./charts/LastSixMonth";
import Piechart from "./charts/Piechart";
import FirstGrids from "./FirstGrids";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <FirstGrids />
      <Grid container spacing={1.5} rowGap={2} columnGap={2} m={1}>
        <Grid item xs={11} md={7.5}>
          <Barchart />
        </Grid>
        <Grid item xs={11} md={3.75}>
          <Piechart />
        </Grid>
      </Grid>

      <LastSixMonth />
    </Box>
  );
};

export default Dashboard;
