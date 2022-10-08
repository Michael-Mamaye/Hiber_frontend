import { Box } from "@mui/material";
import React from "react";
import DataGridComponent from "../../shared/datagrid/DataGridComponent";

const Emails = () => {
  return  <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "100%",
  }}
>
  <DataGridComponent />
</Box>;
};

export default Emails;
