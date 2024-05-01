"use client";

import { Radio } from "@/types/radio";
import { ReactNode, createContext, useEffect, useState } from "react";

type FavoriteStationsType = {
	stations: Radio[];
	newName: string;
	setNewName: (value: string) => void;
	setFavoriteStations: (value: Radio) => void;
	handleDeleteFavorite: (stationuuid: string) => void;
	handleUpdateName: (stationuuid: string, newName: string) => void;
};

export const FavoriteStations = createContext<FavoriteStationsType>({
	stations: [],
	newName: "",
	setNewName: () => {},
	setFavoriteStations: () => {},
	handleDeleteFavorite: () => {},
	handleUpdateName: () => {},
});

export const StationsProvider = ({ children }: { children: ReactNode }) => {
	const [stations, setStations] = useState<Radio[]>([]);
	const [newName, setNewName] = useState("");

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

	const handleUpdateName = (stationuuid: string, newName: string) => {
		setStations((prev) =>
			prev.map((station) =>
				station.stationuuid === stationuuid
					? { ...station, name: newName }
					: station,
			),
		);
		setNewName("");
	};

	return (
		<FavoriteStations.Provider
			value={{
				stations,
				newName,
				setNewName,
				setFavoriteStations,
				handleDeleteFavorite,
				handleUpdateName,
			}}
		>
			{children}
		</FavoriteStations.Provider>
	);
};
