export async function filteredData(query: string, page: number) {
	const url = new URL(
		`https://de1.api.radio-browser.info/json/stations/search?name=${query}&page=${page}&limit=10`,
	);

	const response = await fetch(url.toString());
	const data = await response.json();

	return data;
}
