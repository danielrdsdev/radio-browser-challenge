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
	handlePlay: (stationuuid: string) => void;
};

export const FavoriteStations = createContext<FavoriteStationsType>({
	stations: [],
	newName: "",
	setNewName: () => {},
	setFavoriteStations: () => {},
	handleDeleteFavorite: () => {},
	handleUpdateName: () => {},
	handlePlay: () => {},
});

export const StationsProvider = ({ children }: { children: ReactNode }) => {
	const [stations, setStations] = useState<Radio[]>([]);
	const [newName, setNewName] = useState("");

	useEffect(() => {
		setStations(JSON.parse(localStorage.getItem("favorite-stations") || "[]"));
	}, []);

	useEffect(() => {
		localStorage.setItem("favorite-stations", JSON.stringify(stations));
	}, [stations]);

	const setFavoriteStations = (value: Radio) => {
		if (stations.some((station) => station.stationuuid === value.stationuuid)) {
			return;
		}

		setStations((prev) => [...prev, value]);
	};

	const handleDeleteFavorite = (stationuuid: string) => {
		setStations((prev) => {
			const station = prev.find(
				(station) => station.stationuuid === stationuuid,
			);
			if (station?.playing) {
				const audio = document.getElementById("audio") as HTMLAudioElement;
				audio.pause();
			}
			return prev.filter((station) => station.stationuuid !== stationuuid);
		});
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

	const handlePlay = (stationuuid: string) => {
		setStations((prev) =>
			prev.map((station) => {
				if (station.stationuuid === stationuuid) {
					const isPlaying = !station.playing;
					const audio = document.getElementById("audio") as HTMLAudioElement;

					if (isPlaying) {
						audio.src = station.url_resolved;
						audio.play();
					} else {
						audio.pause();
					}

					return { ...station, playing: isPlaying };
				}

				return { ...station, playing: false };
			}),
		);
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
				handlePlay,
			}}
		>
			{children}
		</FavoriteStations.Provider>
	);
};
