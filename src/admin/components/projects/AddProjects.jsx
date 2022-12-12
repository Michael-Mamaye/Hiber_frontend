import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import DrawerLayout from "../../shared/DrawerLayout";

const inputFieldStyles = {
	marginBottom: 3,
};

const AddProjects = ({ showAddProjectDrawer, setShowAddProjectDrawer }) => {
	const handleClose = () => {
		setShowAddProjectDrawer(false);
	};
	return (
		<DrawerLayout
			title="Add Service"
			showAddDrawer={showAddProjectDrawer}
			handleClose={handleClose}
			component={
				<Box sx={{ display: "flex", flexDirection: "column", marginTop: 3 }}>
					<TextField placeholder="Service Name" sx={{ ...inputFieldStyles }} />

					<TextField
						id="outlined-multiline-flexible"
						label="Description"
						multiline
						minRows={4}
						maxRows={4}
						sx={{ ...inputFieldStyles }}
					/>
					<Button variant="outlined">Add Service</Button>
				</Box>
			}
		/>
	);
};
export default AddProjects;
