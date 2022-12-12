export const homeContactUsButtonStyle = {
	fontWeight: "bold",
	pl: 2,
	pr: 2,
	background: "#131d33",
	color: "white",
	"&:hover": {
		background: "#131d33",
	},
};
export const homeMainContactUsButtonStyle = {
	fontWeight: "bold",
	m: 3,
	pl: 2,
	pr: 2,
	border: "1px solid rgb(19, 29, 51)",
	background: { xs: "rgb(19, 29, 51)", md: "none" },
	color: { xs: "white", md: "rgb(19, 29, 51)" },
	"&:hover": {
		border: "1px solid rgb(19, 19, 51)",
	},
};

export const viewServicesButtonStyle = {
	background: "#fa9928",
	mt: 5,
	color: "white",
	fontWeight: "bold",
	p: 1,
	"&:hover": {
		background: "#fa9928",
	},
};
export const boardOfDirectorsGridStyle = {
	boxShadow: "0px 0px 1px rgb(190,190,190)",
	maxWidth: { lg: 350 },
	"&:hover": {
		cursor: "pointer",
		boxShadow: "0px 0px 2px #fa9928",
	},
};
export const closeButtonStyle = {
	position: "absolute",
	top: 10,
	right: 10,
	color: "red !important",
};

export const findLocationButtonStyle = {
	color: "rgb(0,0,0,0.8)",
	fontWeight: "bold",
	background: "rgb(240,240,240)",
	maxWidth: 200,
	p: 1.5,
	mb: 3,
	"&:hover": {
		background: "#131d33",
		color: "white",
	},
};
export const footerTypography = {
	color: "rgb(255,255,255,0.4)",
	pt: 3,
};
export const footerLinks = {
	color: "rgb(255,255,255,0.4)",
	paddingTop: 10,
	textDecoration: "none",
	"&:hover": {
		textDecoration: "none",
		color: "#fa9928",
		background: "white",
	},
};
