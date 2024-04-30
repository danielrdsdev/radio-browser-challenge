import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Radio } from "@/types/radio";
import { MoreHorizontal, Play } from "lucide-react";

type TableStationProps = {
	data: Radio[];
};

export const TableStation = ({ data }: TableStationProps) => {
	return (
		<div className="overflow-hidden border rounded-lg">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>#</TableHead>
						<TableHead>Station</TableHead>
						<TableHead className="text-right">Edit</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((station) => (
						<TableRow key={station.stationuuid}>
							<TableCell className="max-w-12">
								<div className="rounded-full size-12 bg-muted flex items-center justify-center">
									<Play className="size-5" />
								</div>
							</TableCell>
							<TableCell className="flex items-center gap-4">
								<div className="space-y-1">
									<h2 className="font-semibold text-lg">{station.name}</h2>
									<p>{station.country}</p>
								</div>
							</TableCell>
							<TableCell className="text-right">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button size="icon" variant="outline">
											<MoreHorizontal className="size-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem>Edit</DropdownMenuItem>
										<DropdownMenuItem>Delete</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};
