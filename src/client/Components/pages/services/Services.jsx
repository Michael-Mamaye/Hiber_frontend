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
import { useQuery } from "react-query";
import Img from "../../../../assets/meetingPicture.jpg";
import { getServicesData } from "../../../controller/servicesController";
import { getDateFormatter } from "../../../utils/utils";

const Services = () => {
	const [marginTop, setmarginTop] = useState(0);
	const { isLoading, data:servicesData } = useQuery(["theClientsServiceList"], () =>
		getServicesData()
	);

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
						{servicesData?.allServices?.map((service) => (
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
											{getDateFormatter(service?.createdAt)}
										</Typography>
									</CardContent>
									<CardHeader title={service?.serviceName} sx={{ pb: 0 }} />
									<CardContent>
										<Typography color="text.secondary">
											{service?.description}
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

export default Services;
