import { Suspense } from "react";
import { GetStations } from "./get-stations";
import { Pagination } from "./pagination";
import { Search } from "./search";
import { StationListSkeleton } from "./station-list-skeleton";

export const Sidebar = ({
	query,
	page,
}: {
	query: string;
	page: number;
}) => {
	const totalPages = 10;

	return (
		<div className="lg:border-r lg:pt-14 px-2 flex flex-col gap-8 lg:fixed lg:left lg:inset-y-0 lg:w-80 h-full">
			<div className="px-4">
				<Search placeholder="Search here" />
			</div>

			<Suspense key={query + page} fallback={<StationListSkeleton />}>
				<GetStations query={query} page={page} />
			</Suspense>

			<div className="mt-auto h-14 px-4">
				<Pagination totalPages={totalPages} />
			</div>
		</div>
	);
};
