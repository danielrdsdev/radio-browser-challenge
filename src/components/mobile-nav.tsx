import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";
import { Button } from "./ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";

export const MobileNav = ({
	query,
	page,
}: {
	query: string;
	page: number;
}) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="outline">
					<Menu className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="px-2">
				<SheetHeader>
					<SheetTitle>Radio Browser</SheetTitle>
				</SheetHeader>
				<div className="mt-8 space-y-4">
					<Sidebar query={query} page={page} />
				</div>
			</SheetContent>
		</Sheet>
	);
};
