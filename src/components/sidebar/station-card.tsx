"use client";

import { FavoriteStations } from "@/components/providers/favorite-stations";
import { Button } from "@/components/ui/button";
import { Radio } from "@/types/radio";
import { Heart } from "lucide-react";
import { useContext } from "react";

type StationCardProps = {
	station: Radio;
};

export const StationCard = ({ station }: StationCardProps) => {
	const { setFavoriteStations, stations } = useContext(FavoriteStations);

	const handleAddFavorite = () => {
		setFavoriteStations({ ...station });
	};

	return (
		<div className="bg-muted/40 rounded-lg p-4 flex items-center gap-4">
			<span className="text-sm line-clamp-2 font-medium">{station.name}</span>

			<div className="ml-auto">
				{stations.some((s) => s.stationuuid === station.stationuuid) ? (
					<Button size="icon" onClick={handleAddFavorite}>
						<Heart className="size-4 fill-primary-foreground" />
					</Button>
				) : (
					<Button size="icon" onClick={handleAddFavorite}>
						<Heart className="size-4" />
					</Button>
				)}
			</div>
		</div>
	);
};
