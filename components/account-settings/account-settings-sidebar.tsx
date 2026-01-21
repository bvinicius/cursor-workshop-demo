"use client";

import {
	CreditCard,
	LayoutGrid,
	type LucideIcon,
	ReceiptText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
	name: string;
	id: string;
	href: string;
	icon: LucideIcon;
	active: boolean;
}

export function AccountSettingsSidebar() {
	const pathname = usePathname();

	const items: SidebarItem[] = [
		{
			name: "Subscriptions",
			id: "subscriptions",
			href: `/subscriptions`,
			icon: LayoutGrid,
			active: pathname.includes("/subscriptions"),
		},
		{
			name: "Payments",
			id: "payments",
			href: `/payments`,
			icon: CreditCard,
			active: pathname.includes("/payments"),
		},
		{
			name: "Invoices",
			id: "invoices",
			href: `/invoices`,
			icon: ReceiptText,
			active: pathname.includes("/invoices"),
		},
	];

	return (
		<nav className="flex flex-col space-y-1">
			{items.map((item) => {
				const Icon = item.icon;
				return (
					<Link
						key={item.href}
						href={item.href}
						className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-sidebar-foreground ${
							item.active ? "bg-sidebar-accent" : "hover:bg-muted"
						}`}
					>
						<Icon
							className={
								"h-5 w-5" +
								(item.active
									? " text-sidebar-accent-icon-foreground"
									: " text-sidebar-foreground")
							}
						/>
						<span className="truncate">{item.name}</span>
					</Link>
				);
			})}
		</nav>
	);
}
