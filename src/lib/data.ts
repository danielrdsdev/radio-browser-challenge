export async function filteredData(
	query: string,
	page: number,
	country: string,
	language: string,
) {
	const url = new URL(
		"https://de1.api.radio-browser.info/json/stations/search",
	);

	url.searchParams.append("name", query);
	url.searchParams.append("limit", "10");
	url.searchParams.append("page", String(page));
	if (country) {
		url.searchParams.append("country", country);
	}
	if (language) {
		url.searchParams.append("language", language);
	}

	const response = await fetch(url.toString());
	const data = await response.json();

	return data;
}
