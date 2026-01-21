import { Inter } from "next/font/google";
import type React from "react";
import { AccountSettingsSidebar } from "@/components/account-settings/account-settings-sidebar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import "@/app/globals.css";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default async function WithNavbarLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={fontSans.variable}>
			<body className="antialiased">
				<div className="min-h-svh flex flex-col">
					<Navbar />
					<div className="flex-1 flex gap-2">
						<div className="py-8 w-72 px-6">
							<AccountSettingsSidebar />
						</div>
						<main className="flex-1 px-8 py-8">{children}</main>
					</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
