import { CreditCard, LayoutGrid, ReceiptText } from "lucide-react";
import Link from "next/link";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Page() {
	const dashboardItems = [
		{
			name: "Subscriptions",
			href: "/subscriptions",
			icon: LayoutGrid,
			description: "Manage your active subscriptions and usage",
		},
		{
			name: "Invoices",
			href: "/invoices",
			icon: ReceiptText,
			description: "View and download your invoices",
		},
		{
			name: "Payments",
			href: "/payments",
			icon: CreditCard,
			description: "Manage payment methods and transactions",
		},
	];

	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
				<p className="text-muted-foreground">
					Navigate to manage your subscriptions, invoices, and payments.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{dashboardItems.map((item) => {
					const Icon = item.icon;
					return (
						<Link key={item.href} href={item.href}>
							<Card className="h-full transition-all hover:shadow-md hover:ring-2 hover:ring-ring/20 cursor-pointer">
								<CardHeader>
									<div className="flex items-center gap-3">
										<div className="p-2 rounded-lg bg-muted">
											<Icon className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>{item.name}</CardTitle>
									</div>
									<CardDescription>{item.description}</CardDescription>
								</CardHeader>
							</Card>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
