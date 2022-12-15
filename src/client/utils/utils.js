export const baseUrl = "http://localhost:5000";

export function getDateFormatter(date) {
	var options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		// hour: "numeric",
		// minute: "numeric",
		// second: "numeric",
	};
	var today = new Date(date);
	return today.toLocaleDateString("en-US", options);
}