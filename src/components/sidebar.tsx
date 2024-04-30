import { Radio } from "@/types/radio";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export const Sidebar = async () => {
	const response = await fetch(
		"https://de1.api.radio-browser.info/json/stations/search?limit=10",
	);

	const data: Radio[] = await response.json();
	return (
		<aside className="w-80 fixed left-0 inset-y-0 border-r py-4 px-2 space-y-8">
			<div className="flex justify-end px-3">
				<Button size="icon" variant="ghost">
					<Menu className="size-5" />
				</Button>
			</div>

			<div className="px-3">
				<Input placeholder="Search here" />
			</div>

			<ScrollArea className="h-[100dvh] px-3">
				<nav className="space-y-4">
					{data.map((station) => (
						<div
							key={station.stationuuid}
							className="bg-muted/40 rounded-lg p-4"
						>
							{station.name}
						</div>
					))}
				</nav>

				<ScrollBar />
			</ScrollArea>
		</aside>
	);
};
