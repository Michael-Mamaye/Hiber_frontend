import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				width: "100%",
				background: "rgb(19, 29, 51,0.1)",
			}}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					rowGap: 2,
					boxShadow: "1px 1px 10px rgba(19,29,51,0.2)",
					padding: 10,
				}}>
				<Box>
					<Typography
						sx={{
							fontSize: 40,
							textAlign: "center",
							color: "#131d33",
							fontWeight: "bolder",
						}}>
						Login
					</Typography>
					<Typography color="text.secondary">
						Please insert username and password
					</Typography>
				</Box>
				<TextField fullWidth label="Username" />
				<TextField fullWidth label="Password" />
				<Button
					size="large"
					sx={{
						background: "#131d33",
						color: "white",
						"&:hover": { background: "rgb(19,29,51,0.9)" },
						width: "50%",
						fontWeight: "bolder",
					}}>
					Submit
				</Button>
				<Box sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}>
					<Typography>Don't have and account?</Typography>
					<Typography
						sx={{ color: "#fa9928" }}
						onClick={() => {
							navigate("/newEmployee/login");
						}}>
						Contact Us
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
export default LoginPage;
