import axios from "axios";
import { baseUrl } from "../utils/utils";

export const getNewsData = async () => {
	const response = await axios.get(`${baseUrl}/news`);
	if (response?.status === 200) {
		return response?.data;
	}
};
