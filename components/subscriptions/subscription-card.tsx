"use client";

import { ChevronDown, Info, Laptop2, LockKeyhole, Server } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProductType, type Subscription } from "@/lib/mock-subscriptions";

function formatNumber(num: number): string {
	return num.toLocaleString("en-US");
}

function getProductIcon(productType: ProductType) {
	switch (productType) {
		case ProductType.SST:
			return Server;
		case ProductType.PPG:
			return LockKeyhole;
		case ProductType.WEB_CMP:
		default:
			return Laptop2;
	}
}

function getStatusLabel(status: Subscription["status"]) {
	switch (status) {
		case "active":
			return "Active";
		case "trial":
			return "Trial";
		case "inactive":
			return "Inactive";
		case "cancelled":
			return "Cancelled";
		default:
			return status;
	}
}

interface SubscriptionCardProps {
	subscription: Subscription;
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
	const ProductIcon = getProductIcon(subscription.product.type);
	const usagePercentage = Math.min(
		(subscription.usage.used / subscription.usage.included) * 100,
		100,
	);

	return (
		<div className="bg-neutral-50 rounded-2xl p-8 gap-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
			{/* Left Column - Product Info */}
			<div className="flex flex-col gap-4 pt-2 pl-4">
				<div className="size-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
					<ProductIcon className="size-6 text-foreground" />
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-xl font-semibold text-foreground leading-7">
						{subscription.product.name}
					</h3>
					<p className="text-sm text-muted-foreground leading-5">
						{subscription.product.description}
					</p>
				</div>
			</div>

			{/* Right Column - Plan Details */}
			<div className="flex flex-col gap-4">
				<div className="bg-white border border-border rounded-xl p-8 pt-8 pb-6 flex flex-col gap-6">
					{/* Header Row */}
					<div className="flex items-center justify-between gap-4">
						<div className="flex items-center gap-2.5">
							<span className="text-lg font-semibold text-foreground">
								{subscription.plan.name}
							</span>
							<span
								className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-semibold ${
									subscription.status === "active"
										? "bg-emerald-600 text-white"
										: subscription.status === "trial"
											? "bg-amber-500 text-white"
											: "bg-neutral-200 text-neutral-700"
								}`}
							>
								{getStatusLabel(subscription.status)}
							</span>
						</div>
						<Button size="lg">Manage subscription</Button>
					</div>

					{/* Price Info */}
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-1 text-lg">
							<span className="font-medium text-foreground">
								{subscription.plan.currency}
								{subscription.plan.price}
							</span>
							<span className="text-muted-foreground">
								/ {subscription.plan.billingCycle}
							</span>
						</div>
						<p className="text-sm text-foreground">
							<span className="text-muted-foreground">Next payment:</span>{" "}
							{subscription.nextPaymentDate}
						</p>
					</div>

					{/* Usage Section */}
					<div className="border border-border rounded-lg p-6 flex flex-col gap-3">
						<div className="flex flex-col gap-2">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-1">
									<span className="text-base font-medium text-foreground">
										Session usage
									</span>
									<Tooltip>
										<TooltipTrigger
											render={
												<button
													type="button"
													className="text-muted-foreground hover:text-foreground transition-colors"
												>
													<Info className="size-4" />
												</button>
											}
										/>
										<TooltipContent>
											A session represents each time a visitor loads your
											website with our compliance script for a 30-minute period.
										</TooltipContent>
									</Tooltip>
								</div>
								<div className="flex items-center gap-2 text-base">
									<span className="text-foreground">
										{formatNumber(subscription.usage.used)} used
									</span>
									<span className="text-muted-foreground">
										/ {formatNumber(subscription.usage.included)} included
									</span>
								</div>
							</div>

							{/* Progress Bar */}
							<div className="w-full h-2 rounded-full bg-muted relative overflow-hidden">
								<div
									className={`h-full rounded-full transition-all ${
										usagePercentage > 100
											? "bg-linear-to-r from-amber-400 to-red-500 w-full"
											: "bg-linear-to-r from-brand-300 to-brand-600"
									}`}
									style={{
										width: `${Math.min(usagePercentage, 100)}%`,
									}}
								/>
							</div>

							<p className="text-sm text-muted-foreground">
								Resets on {subscription.usage.resetDate}
							</p>
						</div>
					</div>

					{/* View History Button */}
					<div>
						<Button variant="ghost" className="px-0 h-10 gap-2">
							View history
							<ChevronDown className="size-4" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
