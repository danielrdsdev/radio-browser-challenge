import { Input } from "@/components/ui/input";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Radio } from "@/types/radio";
import { Search } from "lucide-react";
import { TableStation } from "./_components/table-station";

export default async function Home() {
	const response = await fetch(
		"https://de1.api.radio-browser.info/json/stations/search?limit=10",
	);

	const data: Radio[] = await response.json();
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="font-semibold text-lg tracking-tight">
					Favorite radios
				</h2>
				<div className="relative w-fit flex items-center">
					<Search className="size-4 absolute left-4" />
					<Input placeholder="Search stations" className="w-fit pl-10" />
				</div>
			</div>

			<TableStation data={data} />

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}
