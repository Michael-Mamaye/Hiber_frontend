import axios from "axios";
import { baseUrl } from "../utils/utils";

export const getServicesData = async () => {
	const response = await axios.get(`${baseUrl}/services`);
	if (response?.status === 200) {
		return response?.data;
	}
};
