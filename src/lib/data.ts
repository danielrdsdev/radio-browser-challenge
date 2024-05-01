export async function filteredData(query: string, page: number) {
	const response = await fetch(
		`https://de1.api.radio-browser.info/json/stations/search?name=${query}&limit=10&page=${page}`,
	);

	const data = await response.json();

	return data;
}
