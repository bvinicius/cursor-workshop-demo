import Link from "next/link";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="relative mt-8">
			<footer className="flex justify-between items-center text-sm px-5 py-3 absolute bottom-0 w-full font-medium">
				<div>Copyright {currentYear}</div>
				<div className="flex space-x-2 items-center">
					<Link href="privacy-settings" className="hover:text-gray-700">
						Privacy settings
					</Link>
					<div className="w-1 h-1 bg-gray-400 rounded-full" />
					<Link href="privacy-policy" className="hover:text-gray-700">
						Privacy policy
					</Link>
					<div className="w-1 h-1 bg-gray-400 rounded-full" />
					<Link href="legal-notice" className="hover:text-gray-700">
						Legal notice
					</Link>
					<div className="w-1 h-1 bg-gray-400 rounded-full" />
					<Link href="system-status" className="hover:text-gray-700">
						System status
					</Link>
				</div>
			</footer>
		</div>
	);
}
