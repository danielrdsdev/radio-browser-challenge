import { FavoriteStationsList } from "@/components/favorite-stations-list";
import { MobileNav } from "@/components/mobile-nav";
import { Sidebar } from "@/components/sidebar";

export default function Home({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		page?: string;
		country?: string;
		language?: string;
	};
}) {
	const query = searchParams?.query || "";
	const country = searchParams?.country || "";
	const language = searchParams?.language || "";
	const currentPage = Number(searchParams?.page) || 1;

	return (
		<div className="min-h-full relative">
			<div className="hidden lg:block border-r py-14 px-2 space-y-8 h-full fixed left inset-y-0 w-80">
				<Sidebar
					query={query}
					currentPage={currentPage}
					country={country}
					language={language}
				/>
			</div>

			<main className="py-8 px-6 lg:py-14 lg:px-8 lg:ml-80 space-y-8">
				<div className="flex items-center justify-between">
					<h1 className="font-semibold text-2xl tracking-tight">
						Radio Browser
					</h1>

					<div className="lg:hidden flex justify-end">
						<MobileNav
							query={query}
							currentPage={currentPage}
							country={country}
							language={language}
						/>
					</div>
				</div>

				<FavoriteStationsList />
			</main>
		</div>
	);
}
