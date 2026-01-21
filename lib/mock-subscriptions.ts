export enum ProductType {
	WEB_CMP = "WEB_CMP",
	SST = "SST",
	PPG = "PPG",
}

export type SubscriptionStatus = "active" | "inactive" | "cancelled" | "trial";

export interface SubscriptionUsage {
	used: number;
	included: number;
	resetDate: string;
}

export interface Subscription {
	id: string;
	product: {
		type: ProductType;
		name: string;
		description: string;
	};
	plan: {
		name: string;
		price: number;
		currency: string;
		billingCycle: "month" | "year";
	};
	status: SubscriptionStatus;
	nextPaymentDate: string;
	usage: SubscriptionUsage;
}

export const mockSubscriptions: Subscription[] = [
	{
		id: "sub_web_cmp_001",
		product: {
			type: ProductType.WEB_CMP,
			name: "Web CMP",
			description: "Automate consent collection and build user trust.",
		},
		plan: {
			name: "Plus plan",
			price: 15,
			currency: "€",
			billingCycle: "month",
		},
		status: "active",
		nextPaymentDate: "November 1, 2025",
		usage: {
			used: 250000,
			included: 3000,
			resetDate: "Jan 5",
		},
	},
	{
		id: "sub_sst_001",
		product: {
			type: ProductType.SST,
			name: "Server-Side Tagging",
			description: "First-party data collection with enhanced privacy.",
		},
		plan: {
			name: "Pro plan",
			price: 49,
			currency: "€",
			billingCycle: "month",
		},
		status: "active",
		nextPaymentDate: "December 15, 2025",
		usage: {
			used: 1200000,
			included: 5000000,
			resetDate: "Dec 1",
		},
	},
	{
		id: "sub_ppg_001",
		product: {
			type: ProductType.PPG,
			name: "Privacy Policy Generator",
			description: "Create compliant privacy policies effortlessly.",
		},
		plan: {
			name: "Starter plan",
			price: 9,
			currency: "€",
			billingCycle: "month",
		},
		status: "trial",
		nextPaymentDate: "February 1, 2026",
		usage: {
			used: 2,
			included: 5,
			resetDate: "Feb 1",
		},
	},
];
