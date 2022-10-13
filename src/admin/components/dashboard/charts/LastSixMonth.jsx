import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

import {
  CartesianAxis,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "January",
    user: 4000,
    service: 2400,
    project: 2400,
    emails: 1200,
  },
  {
    name: "Feburary",
    user: 3000,
    service: 1398,
    project: 2210,
    emails: 5102,
  },
  {
    name: "March",
    user: 2000,
    service: 9800,
    project: 2290,
    emails: 1380,
  },
  {
    name: "April",
    user: 2780,
    service: 3908,
    project: 2000,
    emails: 9321,
  },
  {
    name: "May",
    user: 1890,
    service: 4800,
    project: 2181,
    emails: 4300,
  },
  {
    name: "June",
    user: 2390,
    service: 3800,
    project: 2500,
    emails: 1390,
  },
  {
    name: "July",
    user: 3490,
    service: 4300,
    project: 2100,
    emails: 2500,
  },
];

const LastSixMonth = () => {
  const [value, setValue] = React.useState([null, null]);
  return (
    <Box
      sx={{
        mt: 5,
        p: 5,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          justifyContent: "center",
          background: "white",
          height: 80,
          width: "95%",
          pl: 5,
          mb: 5,
          borderRadius: 5,
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: "Start", end: "End" }}
          >
            <DateRangePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <Button
            sx={{
              ml: 2,
              color: "#131d33",
              outline: "1px solid #131d33",
              height: 40,
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          pb: 5,
          background: "white",
          borderRadius: 5,
        }}
      >
        <Typography sx={{ p: 3 }} variant="h5" color="text.secondary">
          Last Six Month
        </Typography>
        <Grid item xs={12}>
          <ResponsiveContainer height={300} width="95%">
            <LineChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianAxis strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="service" stroke="#131d33" />
              <Line type="monotone" dataKey="user" stroke="rgb(250, 153, 40)" />
              <Line type="monotone" dataKey="project" stroke="#CBE6EF" />
              <Line type="monotone" dataKey="emails" stroke="#439cde" />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LastSixMonth;
