import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import DataGridComponent from "../../shared/datagrid/DataGridComponent";
import AddServices from "./AddServices";

const Services = () => {
	const [showAddServiceDrawer, setShowAddServiceDrawer] = useState(false);
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				height: "100%",
				width: "100%",
			}}>
			<DataGridComponent
				setAddComponentBoolean={setShowAddServiceDrawer}
				addButtonTitle="Add Service"
			/>
			<AddServices
				showAddServiceDrawer={showAddServiceDrawer}
				setShowAddServiceDrawer={setShowAddServiceDrawer}
			/>
		</Box>
	);
};

export default Services;
