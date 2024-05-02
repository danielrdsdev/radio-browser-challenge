"use client";

import { useFavoriteList } from "@/hooks/useFavoriteList";
import { Search } from "lucide-react";
import { FavoriteStationCard } from "./favorite-station-card";
import { Input } from "./ui/input";

export const FavoriteStationsList = () => {
	const { search, handleSearchChange, playingStation, filteredData } =
		useFavoriteList();

	return (
		<div className="space-y-6">
			<div className="flex justify-end">
				<div className="relative flex items-center">
					<Search className="size-5 absolute left-4" />
					<Input
						placeholder="Search favorite stations"
						value={search}
						onChange={handleSearchChange}
						className="lg:w-80 pl-12"
					/>
				</div>
			</div>

			<div className="space-y-6 border rounded-lg p-4 lg:p-6">
				<div className="border-b pb-4 text-sm">
					{playingStation ? (
						<h2 className="font-medium truncate">
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
