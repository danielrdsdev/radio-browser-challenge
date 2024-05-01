import { Suspense } from "react";
import { GetStations } from "./get-stations";
import { Search } from "./search";
import { StationListSkeleton } from "./station-list-skeleton";

export const Sidebar = ({
	query,
	currentPage,
}: { query: string; currentPage: number }) => {
	return (
		<div className="border-r py-14 px-2 space-y-8 h-full fixed left inset-y-0 w-80">
			<div className="px-4">
				<Search placeholder="Search here" />
			</div>

			<div className="flex-1">
				<Suspense key={query + currentPage} fallback={<StationListSkeleton />}>
					<GetStations query={query} currentPage={currentPage} />
				</Suspense>
			</div>
		</div>
	);
};
