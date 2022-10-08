import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CustomToolbar from "./CustomToolbar";
import { Checkbox } from "@mui/material";

const CustomizedCheckbox = (props) => {
  return (
    <Checkbox
      {...props}
      sx={{
        color: "#fa9928",
        "&.Mui-checked": {
          color: "#fa9928",
          outline: "none",
        },
      }}
    />
  );
};
const datagridStyle = {
  background: "white",
  outline: "none",
  p: 2,
  "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-cell:focus-within":
    {
      outline: "none",
    },

  "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
    outline: "none",
  },
};

// #F1EEE9   #73777B  #fa9928, #131d33

const DataGridComponent = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "age",
      headerName: "Age",
      width: 110,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <DataGrid
      sx={{ ...datagridStyle }}
      components={{
        Toolbar: CustomToolbar,
        BaseCheckbox: CustomizedCheckbox,
      }}
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10, 25, 50, 100]}
      checkboxSelection
      disableSelectionOnClick
      // experimentalFeatures={{ newEditingApi: true }}
    />
  );
};

export default DataGridComponent;
