"use client";

import { useContext } from "react";
import { FavoriteStationCard } from "./favorite-station-card";
import { FavoriteStations } from "./providers/favorite-stations";

export const FavoriteStationsList = () => {
	const { stations } = useContext(FavoriteStations);
	const playingStation = stations.find((station) => station.playing);

	return (
		<div className="space-y-6 border rounded-lg p-6">
			<div className="border-b pb-4">
				{playingStation ? (
					<h2 className="font-medium">
						Playing now:{" "}
						<span className="text-blue-500">{playingStation.name}</span>
					</h2>
				) : (
					<p className="font-medium">No stations are currently playing.</p>
				)}
			</div>
			{stations.length === 0 ? (
				<p>No favorites stations</p>
			) : (
				<>
					{stations.map((station) => (
						<FavoriteStationCard key={station.stationuuid} station={station} />
					))}
				</>
			)}
		</div>
	);
};
