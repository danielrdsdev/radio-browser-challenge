"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

type SearchProps = {
	placeholder: string;
};

export const Search = ({ placeholder }: SearchProps) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);

		params.set("page", "1");

		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className="relative flex items-center">
			<SearchIcon className="absolute left-4" />
			<Input
				placeholder={placeholder}
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={searchParams.get("query")?.toString()}
				className="pl-12"
			/>
		</div>
	);
};
