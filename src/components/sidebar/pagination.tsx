"use client";

import {
	ChevronFirst,
	ChevronLast,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const page = Number(searchParams.get("page")) || 1;

	const firstPage = () => {
		const params = new URLSearchParams(searchParams);

		params.set("page", "1");

		router.push(`${pathname}?${params.toString()}`);
	};

	const previousPage = () => {
		if (page - 1 <= 0) return;

		const params = new URLSearchParams(searchParams);

		params.set("page", String(page - 1));

		router.push(`${pathname}?${params.toString()}`);
	};

	const nextPage = () => {
		if (page + 1 > totalPages) return;

		const params = new URLSearchParams(searchParams);

		params.set("page", String(page + 1));

		router.push(`${pathname}?${params.toString()}`);
	};

	const lastPage = () => {
		const params = new URLSearchParams(searchParams);

		params.set("page", String(totalPages));

		router.push(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="flex items-center gap-2 justify-center">
			<Button
				onClick={firstPage}
				size="icon"
				variant="outline"
				disabled={page - 1 <= 0}
			>
				<ChevronFirst className="size-4" />
			</Button>

			<Button
				onClick={previousPage}
				size="icon"
				variant="outline"
				disabled={page - 1 <= 0}
			>
				<ChevronLeft className="size-4" />
			</Button>

			<Button
				onClick={nextPage}
				size="icon"
				variant="outline"
				disabled={page + 1 > totalPages}
			>
				<ChevronRight className="size-4" />
			</Button>

			<Button
				onClick={lastPage}
				size="icon"
				variant="outline"
				disabled={page + 1 > totalPages}
			>
				<ChevronLast className="size-4" />
			</Button>
		</div>
	);
};
