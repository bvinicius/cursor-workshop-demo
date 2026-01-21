"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";

/**
 * Logo Variation: Badge-style with icon and compact vertical layout
 *
 * Layout Strategy:
 * - Changed from horizontal text-only to badge container with icon
 * - Switched text from horizontal inline to vertical stack
 * - Added geometric icon element with rotation animation
 * - Applied badge-style container with subtle background and border
 * - Used uppercase, compact typography for different visual weight
 */
export function LogoBadge() {
	return (
		<Link href="/" className="flex items-center group">
			<div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-brand-400/30 transition-all duration-200">
				{/* Icon element - geometric shape with Lucide icon */}
				<div className="relative flex items-center justify-center">
					<div className="w-5 h-5 rounded-sm bg-gradient-to-br from-brand-400 to-brand-600 rotate-12 group-hover:rotate-0 transition-transform duration-200 flex items-center justify-center">
						<Sparkles
							className="w-3 h-3 text-white rotate-[-12deg] group-hover:rotate-0 transition-transform duration-200"
							strokeWidth={2.5}
						/>
					</div>
					<div className="absolute inset-0 w-5 h-5 rounded-sm bg-brand-400/20 blur-sm group-hover:bg-brand-400/40 transition-colors" />
				</div>
				{/* Text - compact vertical stack */}
				<div className="flex flex-col leading-none">
					<span className="text-xs font-bold text-white tracking-wider uppercase group-hover:text-brand-300 transition-colors">
						Demo
					</span>
					<span className="text-[10px] font-medium text-brand-400/80 tracking-wider uppercase group-hover:text-brand-300 transition-colors">
						App
					</span>
				</div>
			</div>
		</Link>
	);
}
