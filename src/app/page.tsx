import { FavoriteStationsList } from "@/components/favorite-stations-list";
import { Sidebar } from "@/components/sidebar";

export default function Home({
	searchParams,
}: { searchParams?: { query?: string; page?: string } }) {
	const query = searchParams?.query || "";
	const currentPage = Number(searchParams?.page) || 1;

	return (
		<div className="min-h-full relative">
			<Sidebar query={query} currentPage={currentPage} />

			<main className="py-14 px-8 ml-80 space-y-8">
				<h1 className="font-semibold text-2xl tracking-tight">Radio Browser</h1>
				<FavoriteStationsList />
			</main>
		</div>
	);
}
