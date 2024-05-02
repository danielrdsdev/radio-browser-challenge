import { ScrollArea } from "@/components/ui/scroll-area";
import { filteredData } from "@/lib/data";
import { Radio } from "@/types/radio";
import { StationCard } from "./station-card";

export const GetStations = async ({
	query,
	page,
}: {
	query: string;
	page: number;
}) => {
	const data: Radio[] = await filteredData(query, page);

	return (
		<ScrollArea className="px-4 flex-1">
			<div className="space-y-4">
				{data.map((station) => (
					<StationCard key={station.stationuuid} station={station} />
				))}
			</div>
		</ScrollArea>
	);
};
