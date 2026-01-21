import { SubscriptionCard } from "@/components/subscriptions/subscription-card";
import { mockSubscriptions } from "@/lib/mock-subscriptions";

export default function SubscriptionsPage() {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<h1 className="text-2xl font-semibold text-foreground">
					Subscriptions
				</h1>
				<p className="text-muted-foreground">
					Manage your active subscriptions and usage.
				</p>
			</div>

			<div className="flex flex-col gap-6">
				{mockSubscriptions.map((subscription) => (
					<SubscriptionCard key={subscription.id} subscription={subscription} />
				))}
			</div>
		</div>
	);
}
