import { ScrollArea } from "@/components/ui/scroll-area";
import { filteredData } from "@/lib/data";
import { Radio } from "@/types/radio";
import { StationCard } from "./station-card";

export const GetStations = async ({
	query,
	currentPage,
	country,
	language,
}: {
	query: string;
	currentPage: number;
	country: string;
	language: string;
}) => {
	const data: Radio[] = await filteredData(
		query,
		currentPage,
		country,
		language,
	);

	return (
		<ScrollArea className="px-4 h-[calc(100dvh-10rem)]">
			<div className="space-y-4">
				{data.map((station) => (
					<StationCard key={station.stationuuid} station={station} />
				))}
			</div>
		</ScrollArea>
	);
};
