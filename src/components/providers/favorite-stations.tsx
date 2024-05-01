"use client";

import { Radio } from "@/types/radio";
import { ReactNode, createContext, useEffect, useState } from "react";

type FavoriteStationsType = {
	stations: Radio[];
	setFavoriteStations: (value: Radio) => void;
	handleDeleteFavorite: (stationuuid: string) => void;
};

export const FavoriteStations = createContext<FavoriteStationsType>({
	stations: [],
	setFavoriteStations: () => {},
	handleDeleteFavorite: () => {},
});

export const StationsProvider = ({ children }: { children: ReactNode }) => {
	const [stations, setStations] = useState<Radio[]>([]);

	useEffect(() => {
		setStations(
			JSON.parse(
				localStorage.getItem("@radio-browser/favorite-stations") || "[]",
			),
		);
	}, []);

	useEffect(() => {
		localStorage.setItem(
			"@radio-browser/favorite-stations",
			JSON.stringify(stations),
		);
	}, [stations]);

	const setFavoriteStations = (value: Radio) => {
		if (stations.some((station) => station.stationuuid === value.stationuuid)) {
			return;
		}

		setStations((prev) => [...prev, value]);
	};

	const handleDeleteFavorite = (stationuuid: string) => {
		setStations((prev) =>
			prev.filter((station) => station.stationuuid !== stationuuid),
		);
	};

	return (
		<FavoriteStations.Provider
			value={{ stations, setFavoriteStations, handleDeleteFavorite }}
		>
			{children}
		</FavoriteStations.Provider>
	);
};
