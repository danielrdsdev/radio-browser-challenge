"use client";

import { PlayCircle, Trash } from "lucide-react";
import { useContext } from "react";
import { FavoriteStations } from "./providers/favorite-stations";
import { Button } from "./ui/button";

export const FavoriteStationsList = () => {
	const { stations, handleDeleteFavorite } = useContext(FavoriteStations);

	return (
		<div className="space-y-6 border rounded-lg p-6">
			{stations.length === 0 ? (
				<p>No favorites stations</p>
			) : (
				<>
					{stations.map((station) => (
						<div
							key={station.stationuuid}
							className="flex items-center justify-between"
						>
							<div className="flex items-center gap-4">
								<div className="rounded-full bg-muted/40 border size-16 flex items-center justify-center">
									<PlayCircle className="size-8" />
								</div>
								<div>
									<h2 className="font-medium text-lg">{station.name}</h2>
									<p className="text-sm text-muted-foreground">
										{station.country}
									</p>
								</div>
							</div>

							<Button
								onClick={() => handleDeleteFavorite(station.stationuuid)}
								size="icon"
								variant="destructive"
							>
								<Trash className="size-5" />
							</Button>
						</div>
					))}
				</>
			)}
		</div>
	);
};
