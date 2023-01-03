import { Close } from "@mui/icons-material";
import { Drawer, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
const DrawerLayout = ({ title, showDrawer, handleClose, component }) => {
	return (
		<Drawer
			anchor="right"
			title={title}
			open={showDrawer}
			onClose={handleClose}>
			<Box
				sx={{
					p: 1,
					background: "rgb(19, 29, 51,0.1)",
					height: "100%",
					minWidth: { lg: "600px", md: "500px", xs: "450px" },
				}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						p: 1,
						alignItems: "center",
						borderBottom: "1px solid rgb(199,199,199,0.5)",
					}}>
					<Typography
						sx={{
							fontWeight: "bold",
							fontSize: { xs: 20, md: 22, lg: 25 },
							p: 1,
						}}>
						{title}
					</Typography>
					<IconButton onClick={handleClose}>
						<Close sx={{ color: "red", fontWeight: "bold", fontSize: 30 }} />
					</IconButton>
				</Box>
				<Box p={2}>{component}</Box>
			</Box>
		</Drawer>
	);
};
export default DrawerLayout;
