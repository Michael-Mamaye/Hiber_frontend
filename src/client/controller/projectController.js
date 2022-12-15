import axios from "axios";
import { baseUrl } from "../utils/utils";

export const getProjectsData = async () => {
	const response = await axios.get(`${baseUrl}/products`);
	if (response?.status === 200) {
		return response?.data;
	}
};
