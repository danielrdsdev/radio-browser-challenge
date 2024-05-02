import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

export const StationListSkeleton = () => {
	return (
		<ScrollArea className="px-4 h-[calc(100dvh-10rem)]">
			<div className="space-y-4">
				{[...Array(10)].map((_, i) => (
					<Skeleton key={`${i + 1}`} className="h-16 w-full" />
				))}
			</div>
		</ScrollArea>
	);
};
