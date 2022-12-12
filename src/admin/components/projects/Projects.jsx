import React, { useState } from "react";
import { Box } from "@mui/material";
import DataGridComponent from "../../shared/datagrid/DataGridComponent";
import AddProjects from "./AddProjects";

const Projects = () => {
	const [showAddProjectDrawer, setShowAddProjectDrawer] = useState(false);

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
				setAddComponentBoolean={setShowAddProjectDrawer}
				addButtonTitle="Add Service"
			/>
			<AddProjects
				showAddProjectDrawer={showAddProjectDrawer}
				setShowAddProjectDrawer={setShowAddProjectDrawer}
			/>
		</Box>
	);
};

export default Projects;
