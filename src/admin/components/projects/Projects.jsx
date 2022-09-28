import React from "react";
import { Box } from "@mui/material";
import DataGridComponent from "../../shared/datagrid/DataGridComponent";

const Projects = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <DataGridComponent />
    </Box>
  );
};

export default Projects;
