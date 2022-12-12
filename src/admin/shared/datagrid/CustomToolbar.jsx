import React from "react";
import {
	GridToolbarContainer,
	GridToolbarExport,
	GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Button, Grid, Input } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
const CustomToolbar = ({ onAddClick, addButtonTitle }) => {
	return (
		<GridToolbarContainer
			sx={{
				borderBottom: "3px solid rgba(0,0,0,0.1)",
				marginBottom: 2,
				paddingBottom: 3,
			}}>
			<Grid container>
				<Grid item xs={12} md={4}>
					<Input
						disableUnderline
						sx={{
							display: "flex",
							flexDirection: "row",
							height: 40,
							borderRadius: 1,
							paddingLeft: 2,
							background: "rgb(19, 29, 51,0.1)",
						}}
						endAdornment={
							<Button
								style={{
									height: "100%",
									border: "none",
									color: "rgb(0,0,0,0.8)",
									textDecoration: "none",
								}}>
								<SearchOutlined sx={{ fontSize: 20 }} />
							</Button>
						}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={8}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "end",
					}}>
					<Button
						onClick={onAddClick}
						sx={{
							background: "#131d33",
							color: "white",
							fontWeight: "bold",
							"&:hover": {
								background: "rgb(19, 29, 51,0.95)",
							},
						}}>
						{addButtonTitle}
					</Button>
					<GridToolbarExport
						style={{ color: "rgb(19, 29, 51)", marginLeft: 5 }}
					/>
					<GridToolbarFilterButton
						style={{ color: "rgb(19, 29, 51)", marginLeft: 5 }}
					/>
				</Grid>
			</Grid>
		</GridToolbarContainer>
	);
};

export default CustomToolbar;
