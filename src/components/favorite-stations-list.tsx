"use client";

import { useFavoriteList } from "@/hooks/useFavoriteList";
import { FavoriteStationCard } from "./favorite-station-card";
import { Input } from "./ui/input";

export const FavoriteStationsList = () => {
	const { search, handleSearchChange, playingStation, filteredData } =
		useFavoriteList();

	return (
		<div className="space-y-6">
			<div className="flex justify-end w-full">
				<Input
					placeholder="Search favorite stations"
					value={search}
					onChange={handleSearchChange}
					className="w-80"
				/>
			</div>

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
				{filteredData.length === 0 ? (
					<p>No favorites stations</p>
				) : (
					<>
						{filteredData.map((station) => (
							<FavoriteStationCard
								key={station.stationuuid}
								station={station}
							/>
						))}
					</>
				)}
			</div>
		</div>
	);
};
