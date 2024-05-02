import { FavoriteStations } from "@/components/providers/favorite-stations";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useState } from "react";
import useDebounceValue from "./useDebounceValue";

export const useFavoriteList = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { stations } = useContext(FavoriteStations);
	const [search, setSearch] = useState(searchParams.get("search") || "");
	const playingStation = stations.find((station) => station.playing);

	const searchTerm = useDebounceValue(search, 300);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearch(value);
		handleFilter(value);
	};

	const handleFilter = (search: string) => {
		router.push(`?search=${search}`, { scroll: false });
	};

	const filteredData = stations.filter(
		(station) =>
			searchTerm === "" ||
			station.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);
	return {
		search,
		playingStation,
		filteredData,
		handleSearchChange,
	};
};
