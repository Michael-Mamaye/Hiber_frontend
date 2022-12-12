import {
	Typography,
	Box,
	Grid,
	CardMedia,
	Card,
	CardContent,
} from "@mui/material";
import React from "react";
import Med from "../../../../assets/questionAndAnswer.jpg";
import DetailDescription from "./DetailDescriptionModal";
import { boardOfDirectorsGridStyle } from "./style";
const BoardOfDirectors = () => {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ p: 5 }}>
			<Typography
				sx={{
					fontSize: 30,
					fontWeight: "bold",
					pb: 5,
					color: "rgb(0,0,0,0.8)",
				}}>
				Our Experts Team
			</Typography>
			<DetailDescription
				handleClose={handleClose}
				open={open}
				setOpen={setOpen}
			/>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={4}>
					<Card
						elevation={0}
						sx={boardOfDirectorsGridStyle}
						onClick={handleClick}>
						<CardMedia image={Med} sx={{ minHeight: 200 }} />
						<CardContent>
							<Typography
								sx={{ fontSize: 20, color: "#fa9928", fontWeight: "bold" }}>
								Dr. Shimeles Dereje
							</Typography>
							<Typography mt={3}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Aperiam sequi quis quia, fugiat officiis placeat eveniet
								voluptas deserunt nisi suscipit dolore voluptatibus tempore,
								dicta quasi sit soluta illum at maiores!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card
						elevation={0}
						sx={boardOfDirectorsGridStyle}
						onClick={handleClick}>
						<CardMedia image={Med} sx={{ minHeight: 200 }} />
						<CardContent>
							<Typography
								sx={{ fontSize: 20, color: "#fa9928", fontWeight: "bold" }}>
								Dr. Shimeles Dereje
							</Typography>
							<Typography mt={3}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Aperiam sequi quis quia, fugiat officiis placeat eveniet
								voluptas deserunt nisi suscipit dolore voluptatibus tempore,
								dicta quasi sit soluta illum at maiores!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card
						elevation={0}
						sx={boardOfDirectorsGridStyle}
						onClick={handleClick}>
						<CardMedia image={Med} sx={{ minHeight: 200 }} />
						<CardContent>
							<Typography
								sx={{ fontSize: 20, color: "#fa9928", fontWeight: "bold" }}>
								Dr. Shimeles Dereje
							</Typography>
							<Typography mt={3}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Aperiam sequi quis quia, fugiat officiis placeat eveniet
								voluptas deserunt nisi suscipit dolore voluptatibus tempore,
								dicta quasi sit soluta illum at maiores!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card
						elevation={0}
						sx={boardOfDirectorsGridStyle}
						onClick={handleClick}>
						<CardMedia image={Med} sx={{ minHeight: 200 }} />
						<CardContent>
							<Typography
								sx={{ fontSize: 20, color: "#fa9928", fontWeight: "bold" }}>
								Dr. Shimeles Dereje
							</Typography>
							<Typography mt={3}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Aperiam sequi quis quia, fugiat officiis placeat eveniet
								voluptas deserunt nisi suscipit dolore voluptatibus tempore,
								dicta quasi sit soluta illum at maiores!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card
						elevation={0}
						sx={boardOfDirectorsGridStyle}
						onClick={handleClick}>
						<CardMedia image={Med} sx={{ minHeight: 200 }} />
						<CardContent>
							<Typography
								sx={{ fontSize: 20, color: "#fa9928", fontWeight: "bold" }}>
								Dr. Shimeles Dereje
							</Typography>
							<Typography mt={3}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Aperiam sequi quis quia, fugiat officiis placeat eveniet
								voluptas deserunt nisi suscipit dolore voluptatibus tempore,
								dicta quasi sit soluta illum at maiores!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card
						elevation={0}
						sx={boardOfDirectorsGridStyle}
						onClick={handleClick}>
						<CardMedia image={Med} sx={{ minHeight: 200 }} />
						<CardContent>
							<Typography
								sx={{ fontSize: 20, color: "#fa9928", fontWeight: "bold" }}>
								Dr. Shimeles Dereje
							</Typography>
							<Typography mt={3}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Aperiam sequi quis quia, fugiat officiis placeat eveniet
								voluptas deserunt nisi suscipit dolore voluptatibus tempore,
								dicta quasi sit soluta illum at maiores!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default BoardOfDirectors;
