import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

interface TableSortingIconsProps {
	sortDirection: "asc" | "desc" | false;
}

export function TableSortingIcons({ sortDirection }: TableSortingIconsProps) {
	return (
		<div className="flex items-center gap-2">
			{sortDirection === "asc" && <ArrowUp className="h-4 w-4" />}
			{sortDirection === "desc" && <ArrowDown className="h-4 w-4" />}
			{!sortDirection && <ArrowUpDown className="h-4 w-4" />}
		</div>
	);
}
