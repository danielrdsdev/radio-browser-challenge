import { Radio } from "@/types/radio";
import { Edit2, PlayCircle, StopCircle, Trash } from "lucide-react";
import { useContext } from "react";
import { FavoriteStations } from "./providers/favorite-stations";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

type FavoriteStationCardProps = {
	station: Radio;
};

export const FavoriteStationCard = ({ station }: FavoriteStationCardProps) => {
	const {
		handleDeleteFavorite,
		handleUpdateName,
		newName,
		setNewName,
		handlePlay,
	} = useContext(FavoriteStations);

	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2 lg:gap-4 overflow-hidden">
				<button
					onClick={() => handlePlay(station.stationuuid)}
					type="button"
					className="rounded-full bg-muted/40 border size-12 lg:size-16 flex items-center justify-center"
				>
					{station.playing ? (
						<StopCircle className="size-6 lg:size-8 text-blue-500" />
					) : (
						<PlayCircle className="size-6 lg:size-8" />
					)}
				</button>
				<div className="truncate flex-1">
					<h2 className="font-medium text-sm lg:text-lg">{station.name}</h2>
					<p className="hidden lg:block text-sm text-muted-foreground">
						{station.country}
					</p>
				</div>
			</div>

			<div className="flex items-center gap-2 lg:gap-4">
				<div className="hidden lg:block">
					<Dialog>
						<DialogTrigger asChild>
							<Button size="icon" variant="outline">
								<Edit2 className="size-5" />
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>Update name</DialogHeader>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									handleUpdateName(station.stationuuid, newName);
								}}
								className="w-full space-y-4"
							>
								<Input
									placeholder="New name"
									value={newName}
									onChange={(e) => setNewName(e.target.value)}
								/>

								<DialogClose asChild>
									<Button type="submit">Salvar</Button>
								</DialogClose>
							</form>
						</DialogContent>
					</Dialog>
				</div>

				<Button
					onClick={() => handleDeleteFavorite(station.stationuuid)}
					size="icon"
					variant="destructive"
				>
					<Trash className="size-5" />
				</Button>
			</div>
		</div>
	);
};
