import { Suspense } from "react";
import { GetStations } from "./get-stations";
import { Search } from "./search";
import { StationListSkeleton } from "./station-list-skeleton";

export const Sidebar = ({
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
	return (
		<>
			<div className="px-4">
				<Search placeholder="Search here" />
			</div>

			<div className="flex-1">
				<Suspense key={query + currentPage} fallback={<StationListSkeleton />}>
					<GetStations
						query={query}
						currentPage={currentPage}
						country={country}
						language={language}
					/>
				</Suspense>
			</div>
		</>
	);
};
