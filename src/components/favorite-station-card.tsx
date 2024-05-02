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
			<div className="flex items-center gap-4">
				<button
					onClick={() => handlePlay(station.stationuuid)}
					type="button"
					className="rounded-full bg-muted/40 border size-16 flex items-center justify-center"
				>
					{station.playing ? (
						<StopCircle className="size-8 text-blue-500" />
					) : (
						<PlayCircle className="size-8" />
					)}
				</button>
				<div>
					<h2 className="font-medium text-lg">{station.name}</h2>
					<p className="text-sm text-muted-foreground">{station.country}</p>
				</div>
			</div>

			<div className="flex items-center gap-4">
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
