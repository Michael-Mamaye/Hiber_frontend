import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	CircularProgress,
	Grid,
	Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Img from "../../../../assets/meetingPicture.jpg";
import { getProjectsData } from "../../../controller/projectController";
import { useQuery } from "react-query";
import { getDateFormatter } from "../../../utils/utils";
const Projects = () => {
	const [marginTop, setmarginTop] = useState(0);
	const { isLoading, data: projectsData } = useQuery(
		["theClientProjectList"],
		() => getProjectsData()
	);
	console.log({ projectsData });
	window.addEventListener("scroll", () => {
		if (window.scrollY > 149) {
			setmarginTop(8);
		} else {
			setmarginTop(0);
		}
	});
	useEffect(() => {
		window.scrollTo(0, 150);
	}, []);
	return (
		<Box
			sx={{
				alignItems: "center",
				justifyContent: "center",
				mt: { xs: 0, sm: marginTop },
				mb: 10,
			}}>
			<Box sx={{ p: 5 }}>
				{isLoading ? (
					<CircularProgress />
				) : (
					<Grid container spacing={5}>
						{projectsData?.allProducts?.map((product) => (
							<Grid item xs={12} md={6} lg={4}>
								<Card
									sx={{
										height: "100%",
										boxShadow: "1px 1px 1px rgb(0,0,0,0.1)",
									}}
									elevation={0}>
									<CardMedia image={Img} sx={{ minHeight: 200 }} />
									<CardContent>
										<Typography
											sx={{
												display: "flex",
												alignItems: "center",
												columnGap: 1,
												color: "rgba(0,0,0,0.4)",
												p: 0,
												m: 0,
											}}>
											Bussiness{" "}
											<span>
												<div
													style={{
														border: "2px solid #fa9928",
														width: "2px",
														height: "2px",
													}}
												/>
											</span>
											{getDateFormatter(product?.createdAt)}
										</Typography>
									</CardContent>
									<CardHeader title={product?.productName} sx={{ pb: 0 }} />
									<CardContent>
										<Typography color="text.secondary">
											{product?.description}
										</Typography>
									</CardContent>
									<CardActions sx={{ justifyContent: "end" }}>
										<Button sx={{ color: "#fa9928" }}>Read More</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				)}
			</Box>
		</Box>
	);
};

export default Projects;
