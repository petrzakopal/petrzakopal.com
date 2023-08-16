"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/cnHelper";
import { LayoutGroup, motion } from "framer-motion";

/**
 * @name ActiveLink
 * @description Only checks for path and renders the link
 */
export const ActiveLink = ({
	href,
	text,
	className,
}: {
	href: string;
	text: string;
	className: string;
}) => {
	let pathname = usePathname();
	if (pathname.includes("/notes/")) {
		pathname = "/notes";
	}
	const isActive = pathname === href;

	return (
		<>
			<Link
				className={cn(
					"",
					className,
					isActive
						? "text-primary-accent underline underline-offset-2"
						: "text-dark-black dark:text-light-white transition-colors ease-in-out"
				)}
				href={href}
			>
				{text}
			</Link>
		</>
	);
};

/**
 * @name ActiveLinkGroup
 * @description Renders navItems and framer motion underline div with motion. Checks if the pathname of url is the actual pathname and stylizes the link.
 */
const navItems = [
	{ text: "Home", href: "/" },
	{ text: "Notes", href: "/notes" },
];

export const ActiveLinkGroup = ({}: {}) => {
	let pathname = usePathname();
	if (pathname.includes("/notes/")) {
		pathname = "/notes";
	}

	return (
		<>
			<LayoutGroup>
				{navItems.map((item) => {
					return (
						<Link
							className={cn(
								"",
								pathname === item.href
									? "text-primary-accent  underline-offset-2 relative"
									: "text-dark-black dark:text-light-white"
							)}
							href={item.href}
							key={item.text}
						>
							{item.text}
							{item.href === pathname ? (
								<motion.div
									className="absolute h-[2px] top-6 inset-0 bg-primary-accent rounded-lg z-[1] w-full"
									layoutId="navbar"
									transition={{
										type: "spring",
										stiffness: 350,
										damping: 30,
									}}
								/>
							) : null}
						</Link>
					);
				})}
			</LayoutGroup>
		</>
	);
};
